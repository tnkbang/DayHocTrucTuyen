using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.Courses.Controllers
{
    public class RoomController : BaseController
    {
        // GET: Courses/Room
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        //Danh sách các lớp học của người dùng
        public ActionResult List(string q)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            List<LopHoc> roomOfUser = db.LopHocs.Where(x => x.Ma_ND == sess.MaUser).OrderByDescending(x => x.Ngay_Tao).ToList();
            ViewData["Tag"] = db.Tags.ToList();
            ViewBag.Search = q;
            return View(roomOfUser);
        }

        //Giao diện chính lớp học
        public ActionResult Detail(string Room)
        {
            LopHoc room = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == Room);
            LopHoc roomBD = db.LopHocs.FirstOrDefault(x => x.Bi_Danh == Room);
            if (Room == null || room == null && roomBD == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            if (roomBD != null)
            {
                ViewData["Post"] = roomBD.getAllPost(roomBD.Ma_Lop);
                return View(roomBD);
            }
            ViewData["Post"] = room.getAllPost(room.Ma_Lop);
            return View(room);
        }

        //Trang chỉnh sửa lớp học
        public ActionResult editRoom(string Room)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if(sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            LopHoc room = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == Room && x.Ma_ND == sess.MaUser);
            if(room==null || Room == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            ViewData["Tag"] = db.Tags.ToList();
            return View(room);
        }

        //Thêm mới lớp học
        [HttpPost]
        public ActionResult createRoom(string tl, string bd, string mt, string tag, HttpPostedFileBase img)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            LopHoc newLop = new LopHoc();

            newLop.Ma_Lop = newLop.setMa();
            newLop.Ma_ND = sess.MaUser;
            newLop.Ngay_Tao = DateTime.Now;
            newLop.Ten_Lop = tl;
            newLop.Trang_Thai = true;

            if (img != null)
            {
                string file_extension = Path.GetFileName(img.FileName).Substring(Path.GetFileName(img.FileName).LastIndexOf('.'));
                var fileName = newLop.Ma_Lop + "-" + DateTime.Now.Millisecond + file_extension;
                var path = Path.Combine(Server.MapPath("~/Content/Img/roomCover"), fileName);
                img.SaveAs(path);
                newLop.Img_Bia = fileName;
            }

            if (bd != "null") 
            {
                LopHoc checkBD = db.LopHocs.FirstOrDefault(x=>x.Bi_Danh == bd);
                if(checkBD != null)
                {
                    return Json(new { tt = false, mess = "Bí danh đã tồn tại !" }, JsonRequestBehavior.AllowGet);
                }
                newLop.Bi_Danh = bd;
            }
            else
            {
                newLop.Bi_Danh = newLop.Ma_Lop;
            }
            if (mt != "null") { newLop.Mo_Ta = mt; }

            db.LopHocs.Add(newLop);
            db.SaveChanges();

            //Thêm phần tử vào table LopThuocTag
            if (tag != "")
            {
                string[] roomTag = new string[] { "" };
                roomTag = tag.Split(',');

                for (var i = 0; i < roomTag.Length; i++)
                {
                    db.Database.ExecuteSqlCommand("INSERT INTO LopThuocTag VALUES('" + roomTag[i] + "','" + newLop.Ma_Lop + "')");
                }
            }

            return Json(new { tt = true, room = newLop.Ma_Lop }, JsonRequestBehavior.AllowGet);
        }

        //Cập nhật thông tin lớp học
        [HttpPost]
        public ActionResult editRoom(string ml, string tl, string bd, string mk, string mt, string tag, HttpPostedFileBase img)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            var update = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == ml && x.Ma_ND == sess.MaUser);

            if (update == null)
            {
                return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
            }

            update.Ten_Lop = tl;
            if (bd != "null")
            {
                LopHoc checkBD = db.LopHocs.FirstOrDefault(x => x.Bi_Danh == bd);
                LopHoc bidanhThis = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == update.Ma_Lop && x.Bi_Danh == bd);
                if (checkBD != null && bidanhThis == null)
                {
                    return Json(new { tt = false, mess = "Bí danh đã tồn tại !" }, JsonRequestBehavior.AllowGet);
                }
                update.Bi_Danh = bd;
            }
            else { update.Bi_Danh = null; }
            if(mk != "null") { update.Mat_Khau = mk; }
            else { update.Mat_Khau = null; }
            if(mt != "null") { update.Mo_Ta = mt; }
            else { update.Mo_Ta = null; }

            if (img != null)
            {
                if (update.Img_Bia != null)
                {
                    var delpath = Path.Combine(Server.MapPath("~/Content/Img/roomCover"), update.Img_Bia);
                    if (System.IO.File.Exists(delpath))
                    {
                        System.IO.File.Delete(delpath);
                    }
                }
                string file_extension = Path.GetFileName(img.FileName).Substring(Path.GetFileName(img.FileName).LastIndexOf('.'));
                var fileName = update.Ma_Lop + "-" + DateTime.Now.Millisecond + file_extension;
                var path = Path.Combine(Server.MapPath("~/Content/Img/roomCover"), fileName);
                img.SaveAs(path);
                update.Img_Bia = fileName;
            }

            db.SaveChanges();

            //Thêm phần tử vào table LopThuocTag
            if (tag != "")
            {
                //Xóa hết tag cũ của lớp
                db.Database.ExecuteSqlCommand("DELETE FROM LopThuocTag WHERE Ma_Lop='" + update.Ma_Lop + "'");

                string[] roomTag = new string[] { "" };
                roomTag = tag.Split(',');

                for (var i = 0; i < roomTag.Length; i++)
                {
                    db.Database.ExecuteSqlCommand("INSERT INTO LopThuocTag VALUES('" + roomTag[i] + "','" + update.Ma_Lop + "')");
                }
            }

            return Json(new { tt = true, room = update.Ma_Lop }, JsonRequestBehavior.AllowGet);
        }

        //Thêm mới thành viên cho lớp
        [HttpPost]
        public ActionResult setJoinRoom(string maLop)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];

            HocSinhThuocLop hs = new HocSinhThuocLop();
            hs.Ma_ND = sess.MaUser;
            hs.Ma_Lop = maLop;
            hs.Ngay_Tham_Gia = DateTime.Now;

            db.HocSinhThuocLops.Add(hs);
            db.SaveChanges();

            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }
    }
}