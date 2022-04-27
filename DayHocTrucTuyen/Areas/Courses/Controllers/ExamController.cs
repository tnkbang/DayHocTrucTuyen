using DayHocTrucTuyen.Areas.User.Controllers;
using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.Courses.Controllers
{
    public class ExamController : BaseController
    {
        // GET: Courses/Exam
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        //Quản lý phòng thi
        public ActionResult Manage(string id)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x=>x.Ma_Phong == id);
            if (sess != null && sess.Loai != "GiaoVien")
            {
                return new HttpStatusCodeResult(HttpStatusCode.MethodNotAllowed);
            }
            if(id == null || pt == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            return View(pt);
        }
        //Danh sách bài thi của lớp
        public ActionResult List(string Room, string q)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            LopHoc lp = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == Room);
            if (sess != null && sess.Loai != "GiaoVien")
            {
                return new HttpStatusCodeResult(HttpStatusCode.MethodNotAllowed);
            }
            if (Room == null || lp == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            var pt = db.PhongThis.Where(x => x.Ma_Lop == lp.Ma_Lop).OrderByDescending(x=>x.Ngay_Tao).ToList();
            ViewBag.MaLop = lp.Ma_Lop;
            ViewBag.TenLop = lp.Ten_Lop;
            ViewBag.Search = q;
            return View(pt);
        }
        //Trang xác nhận trước khi thi
        public ActionResult preExam(string id)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == id);
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            if (id == null || pt == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            var mem = db.HocSinhThuocLops.FirstOrDefault(x => x.Ma_ND == sess.MaUser && x.Ma_Lop == pt.Ma_Lop);
            if(mem == null)
            {
                return Redirect("~/Courses/Room/Detail?Room=" + pt.Ma_Lop);
            }
            return View(pt);
        }

        //Trang thực hiện thi
        public ActionResult workExam(string id, int re)
        {
            if(id== null || re == 0) return new HttpStatusCodeResult(HttpStatusCode.NotFound);

            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            var work = db.ThoiGianLamBais.FirstOrDefault(x => x.Ma_ND == sess.MaUser && x.Ma_Phong == id && x.Lan_Thu == re);
            if (work == null) return new HttpStatusCodeResult(HttpStatusCode.NotFound);

            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == work.Ma_Phong);
            ViewBag.Lan_Thu = work.Lan_Thu;

            TimeSpan thoigianthi = new TimeSpan(0, pt.Thoi_Luong/60, pt.Thoi_Luong%60, 0);
            DateTime thoiluong = work.Bat_Dau;
            if(thoiluong.Add(thoigianthi) < DateTime.Now || work.Ket_Thuc != null)
            {
                return Redirect("~/Courses/Exam/preExam?id=" + pt.Ma_Phong);
            }

            ViewBag.Thoi_Gian_Thi = work.Bat_Dau.Add(thoigianthi).ToString("yyyy-MM-dd HH:mm:ss");
            return View(pt);
        }

        //Trang xem lại bài thi
        public ActionResult viewExam(string id, int re)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == id);
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            if (id == null || pt == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }

            var work = db.ThoiGianLamBais.FirstOrDefault(x => x.Ma_ND == sess.MaUser && x.Ma_Phong == id && x.Lan_Thu == re);
            if (work == null) return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            ViewBag.Lan_Thu = work.Lan_Thu;

            return View(pt);
        }

        //Tạo mới phòng thi
        [HttpPost]
        public ActionResult createExam(string malop, string ten, int thoiluong, string mo, string dong, int lanthu, string matkhau, bool xacthuc, bool xemlai)
        {
            var lop = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == malop);
            if(lop == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            PhongThi newPT = new PhongThi();
            newPT.Ma_Phong = newPT.setMa(lop.Ma_Lop);
            newPT.Ma_Lop = lop.Ma_Lop;
            newPT.Ten_Phong = ten;
            newPT.Ngay_Tao = DateTime.Now;
            if(matkhau != null || matkhau != "null")
            {
                newPT.Mat_Khau = matkhau;
            }
            newPT.Ngay_Mo = new DateTime(int.Parse(mo.Substring(0, 4)), int.Parse(mo.Substring(5, 2)), int.Parse(mo.Substring(8, 2)), int.Parse(mo.Substring(11, 2)), int.Parse(mo.Substring(14, 2)), 0);
            newPT.Ngay_Dong = new DateTime(int.Parse(dong.Substring(0, 4)), int.Parse(dong.Substring(5, 2)), int.Parse(dong.Substring(8, 2)), int.Parse(dong.Substring(11, 2)), int.Parse(dong.Substring(14, 2)), 0);
            newPT.Luot_Thi = lanthu;
            newPT.Xac_Thuc = xacthuc;
            newPT.Xem_Lai = xemlai;
            newPT.Thoi_Luong = thoiluong;

            db.PhongThis.Add(newPT);
            db.SaveChanges();

            //Gửi thông báo đến tất cả thành viên thuộc lớp
            NotificationController notification = new NotificationController();
            var thanhvienlop = db.HocSinhThuocLops.Where(x => x.Ma_Lop == lop.Ma_Lop);
            foreach (var tvl in thanhvienlop)
            {
                notification.setThongBao(tvl.Ma_ND, "Bài thi mới", "exam" + "\\Từ lớp " + lop.Ten_Lop, "Courses/Room/Detail?Room=" + lop.Ma_Lop);
            }

            return Json(new {tt = true, exam = newPT.Ma_Phong }, JsonRequestBehavior.AllowGet);
        }
        //Chỉnh sửa phòng thi
        [HttpPost]
        public ActionResult editExam(string maphong, string ten, int thoiluong, string mo, string dong, int lanthu, string matkhau, bool xacthuc, bool xemlai)
        {
            var phongthi = db.PhongThis.FirstOrDefault(x=>x.Ma_Phong == maphong);
            if (phongthi == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            phongthi.Ten_Phong = ten;
            if (matkhau != null || matkhau != "null")
            {
                phongthi.Mat_Khau = matkhau;
            }
            phongthi.Ngay_Mo = new DateTime(int.Parse(mo.Substring(0, 4)), int.Parse(mo.Substring(5, 2)), int.Parse(mo.Substring(8, 2)), int.Parse(mo.Substring(11, 2)), int.Parse(mo.Substring(14, 2)), 0);
            phongthi.Ngay_Dong = new DateTime(int.Parse(dong.Substring(0, 4)), int.Parse(dong.Substring(5, 2)), int.Parse(dong.Substring(8, 2)), int.Parse(dong.Substring(11, 2)), int.Parse(dong.Substring(14, 2)), 0);
            phongthi.Luot_Thi = lanthu;
            phongthi.Xac_Thuc = xacthuc;
            phongthi.Xem_Lai = xemlai;
            phongthi.Thoi_Luong = thoiluong;

            db.SaveChanges();

            return Json(new { tt = true}, JsonRequestBehavior.AllowGet);
        }
        //Tạo mới câu hỏi
        [HttpPost]
        public ActionResult createQuest(string maphong, string cauhoi, string da1, string da2, string da3, string da4, string loigiai)
        {
            var phongthi = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == maphong);
            if (phongthi == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            CauHoiThi newQuest = new CauHoiThi();
            newQuest.STT = phongthi.getSLCauHoi(phongthi.Ma_Phong) + 1;
            newQuest.Ma_Phong = phongthi.Ma_Phong;
            newQuest.Cau_Hoi = cauhoi;
            newQuest.Loi_Giai = loigiai;
            newQuest.Dap_An = da1 + '\\' + da2 + '\\' + da3 + '\\' + da4;

            db.CauHoiThis.Add(newQuest);
            db.SaveChanges();

            var json = new
            {
                STT = newQuest.STT,
                Ma_Phong = newQuest.Ma_Phong,
                Cau_Hoi = newQuest.Cau_Hoi,
                Loi_Giai = newQuest.getDapAnDung(newQuest.Dap_An, newQuest.Loi_Giai),
                Dap_An_1 = da1,
                Dap_An_2 = da2,
                Dap_An_3 = da3,
                Dap_An_4 = da4,
                Multi_Ans = newQuest.isMultiAns(newQuest.Loi_Giai)
            };

            return Json(new { tt = true, cauhoi = json }, JsonRequestBehavior.AllowGet);
        }
        //Gán câu hỏi cần chỉnh sửa
        [HttpPost]
        public ActionResult getQuestEdit(int stt, string maphong)
        {
            var quest = db.CauHoiThis.FirstOrDefault(x=>x.STT == stt && x.Ma_Phong == maphong);
            if(quest == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            string[] dapan = new string[] { "" };
            dapan = quest.Dap_An.Split('\\');

            var json = new
            {
                STT = quest.STT,
                Ma_Phong = quest.Ma_Phong,
                Cau_Hoi = quest.Cau_Hoi,
                Loi_Giai = quest.getDapAnDungAsInt(quest.Dap_An, quest.Loi_Giai),
                Dap_An_1 = dapan[0],
                Dap_An_2 = dapan[1],
                Dap_An_3 = dapan[2],
                Dap_An_4 = dapan[3],
                Multi_Ans = quest.isMultiAns(quest.Loi_Giai)
            };

            return Json(new { tt = true, cauhoi = json }, JsonRequestBehavior.AllowGet);
        }
        //Chỉnh sửa câu hỏi
        [HttpPost]
        public ActionResult editQuest(int stt, string maphong, string cauhoi, string da1, string da2, string da3, string da4, string loigiai)
        {
            var updateQuest = db.CauHoiThis.FirstOrDefault(x => x.STT == stt && x.Ma_Phong == maphong);
            if (updateQuest == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            updateQuest.Cau_Hoi = cauhoi;
            updateQuest.Loi_Giai = loigiai;
            updateQuest.Dap_An = da1 + '\\' + da2 + '\\' + da3 + '\\' + da4;

            db.SaveChanges();

            var json = new
            {
                STT = updateQuest.STT,
                Ma_Phong = updateQuest.Ma_Phong,
                Cau_Hoi = updateQuest.Cau_Hoi,
                Loi_Giai = updateQuest.getDapAnDung(updateQuest.Dap_An, updateQuest.Loi_Giai),
                Dap_An_1 = da1,
                Dap_An_2 = da2,
                Dap_An_3 = da3,
                Dap_An_4 = da4,
                Multi_Ans = updateQuest.isMultiAns(updateQuest.Loi_Giai)
            };

            return Json(new { tt = true, cauhoi = json }, JsonRequestBehavior.AllowGet);
        }

        //Kiểm tra xem phòng thi có mật khẩu hay không
        [HttpPost]
        public ActionResult ktMatKhau(string maphong)
        {
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == maphong);
            if(pt.Mat_Khau != null) return Json(new { tt = true }, JsonRequestBehavior.AllowGet);

            return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
        }

        //Chuẩn bị phòng thi
        [HttpPost]
        public ActionResult setWorkExam(string maphong, string matkhau)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x=>x.Ma_Phong == maphong && x.Mat_Khau == matkhau);
            if(pt == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            ThoiGianLamBai working = new ThoiGianLamBai();
            working.Ma_ND = sess.MaUser;
            working.Ma_Phong = pt.Ma_Phong;
            working.Lan_Thu = pt.getSLThi(sess.MaUser, pt.Ma_Phong) + 1;
            working.Bat_Dau = DateTime.Now;

            db.ThoiGianLamBais.Add(working);
            db.SaveChanges();

            var json = new
            {
                Ma_Phong = working.Ma_Phong,
                Lan_Thu = working.Lan_Thu
            };

            return Json(new { tt = true, work = json }, JsonRequestBehavior.AllowGet);
        }

        //Gán đáp án thi
        [HttpPost]
        public ActionResult setDapAnThi(int stt, string maphong, int lanthu, string dapan)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == maphong);
            if (pt == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            var tl = db.CauTraLois.FirstOrDefault(x => x.STT == stt && x.Ma_Phong == pt.Ma_Phong && x.Ma_ND == sess.MaUser && x.Lan_Thu == lanthu);
            if(tl == null)
            {
                CauTraLoi newTL = new CauTraLoi();
                newTL.STT = stt;
                newTL.Ma_Phong = pt.Ma_Phong;
                newTL.Ma_ND = sess.MaUser;
                newTL.Lan_Thu = lanthu;
                newTL.Dap_An = dapan;

                db.CauTraLois.Add(newTL);
            }
            else
            {
                if (dapan == "") db.CauTraLois.Remove(tl);
                else tl.Dap_An = dapan;
            }
            
            db.SaveChanges();

            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }
        //Kết thúc bài thi
        [HttpPost]
        public ActionResult setEndExam(string maphong, int lanthu)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == maphong);
            if (pt == null) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            var bt = db.ThoiGianLamBais.FirstOrDefault(x => x.Ma_ND == sess.MaUser && x.Ma_Phong == pt.Ma_Phong && x.Lan_Thu == lanthu);
            bt.Ket_Thuc = DateTime.Now;

            db.SaveChanges();

            return Json(new { tt = true, id = pt.Ma_Phong }, JsonRequestBehavior.AllowGet);
        }
    }
}