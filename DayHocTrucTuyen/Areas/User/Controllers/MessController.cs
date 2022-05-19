using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.User.Controllers
{
    public class MessController : BaseController
    {
        // GET: User/Mess
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();
        public ActionResult Index()
        {
            return View();
        }
        //Lấy tin nhắn từ người gửi cụ thể đến user session
        [HttpPost]
        public ActionResult getTinNhanTuUser(string maNG)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            TinNhan tn = new TinNhan();
            NguoiDung Usend = tn.getUser(maNG);
            NguoiDung Ureceived = tn.getUser(sess.MaUser);
            var usersend = new
            {
                Ma_ND = Usend.Ma_ND,
                Ma_Loai = Usend.Ma_Loai,
                Ho_Lot = Usend.Ho_Lot,
                Ten = Usend.Ten,
                Img_Avt = Usend.Img_Avt
            };
            var userreceived = new
            {
                Ma_ND = Ureceived.Ma_ND,
                Ma_Loai = Ureceived.Ma_Loai,
                Ho_Lot = Ureceived.Ho_Lot,
                Ten = Ureceived.Ten,
                Img_Avt = Ureceived.Img_Avt
            };
            List<dynamic> list = new List<dynamic>();
            foreach(var m in tn.getAllTinNhan(maNG, sess.MaUser))
            {
                var temp = new
                {
                    ID = m.ID,
                    Nguoi_Gui = m.Nguoi_Gui,
                    Nguoi_Nhan = m.Nguoi_Nhan,
                    Thoi_Gian = m.Thoi_Gian.ToString("yyyy-MM-dd'T'HH:mm:ss"),
                    Noi_Dung = m.Noi_Dung,
                    Trang_Thai = m.Trang_Thai
                };
                list.Add(temp);
            }
            setXemTinNhan(sess.MaUser, maNG);
            return Json(new { tt = true, USend = usersend, UReceived = userreceived, TinNhan = list }, JsonRequestBehavior.AllowGet);
        }

        //Gửi tin nhắn cho người khác
        [HttpPost]
        public ActionResult sendNewTinNhan(string maNN, string noidung)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            if(maNN == "" || noidung == "") return Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            TinNhan tn = new TinNhan();
            tn.ID = tn.setID();
            tn.Nguoi_Gui = sess.MaUser;
            tn.Nguoi_Nhan = maNN;
            tn.Thoi_Gian = DateTime.Now;
            tn.Noi_Dung = noidung;
            tn.Trang_Thai = false;

            db.TinNhans.Add(tn);
            db.SaveChanges();
            
            return Json(new { tt = true, Img_Avt = sess.Image, Noi_Dung = tn.Noi_Dung, Thoi_Gian = tn.Thoi_Gian.ToString("yyyy-MM-dd'T'HH:mm:ss") }, JsonRequestBehavior.AllowGet);
        }
        //Đã xem tất cả tin nhắn
        [HttpPost]
        public ActionResult setXemTatCaTinNhan(string maND)
        {
            var tn = db.TinNhans.Where(x => x.Nguoi_Nhan == maND && x.Trang_Thai == false);
            if (tn == null) Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            foreach (var t in tn)
            {
                t.Trang_Thai = true;
            }
            db.SaveChanges();

            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }
        public void setXemTinNhan(string maNN, string maNG)
        {
            var tn = db.TinNhans.Where(x => x.Nguoi_Nhan == maNN && x.Nguoi_Gui == maNG && x.Trang_Thai == false);
            if (tn == null) Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            foreach (var t in tn)
            {
                t.Trang_Thai = true;
            }
            db.SaveChanges();
        }
    }
}