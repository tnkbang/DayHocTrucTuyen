using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.User.Controllers
{
    public class NotificationController : BaseController
    {
        // GET: User/Notification
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        //Tạo thông báo mới
        public void setThongBao(string maND, string tieude, string noidung, string lienket)
        {
            ThongBao newTB = new ThongBao();
            newTB.Ma_TB = newTB.setMa(maND);
            newTB.Ma_ND = maND;
            newTB.Tieu_De = tieude;
            newTB.Noi_Dung = noidung;
            newTB.Thoi_Gian = DateTime.Now;
            newTB.Trang_Thai = false;
            newTB.Lien_Ket = lienket;

            db.ThongBaos.Add(newTB);
            db.SaveChanges();
        }

        //Trang xem thông báo
        public ActionResult Detail()
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            ThongBao tb = new ThongBao();
            tb.Ma_ND = sess.MaUser;
            return View(tb);
        }

        //Đã xem thông báo
        [HttpPost]
        public ActionResult setDaXemThongBao(string maTB, string maND)
        {
            var tb = db.ThongBaos.FirstOrDefault(x => x.Ma_TB == maTB && x.Ma_ND == maND);
            if (tb == null) Json(new { tt = false}, JsonRequestBehavior.AllowGet);

            tb.Trang_Thai = true;
            db.SaveChanges();

            return Json(new { tt = true, link = tb.Lien_Ket }, JsonRequestBehavior.AllowGet);
        }

        //Đã xem tất cả thông báo
        [HttpPost]
        public ActionResult setXemTatCaThongBao(string maND)
        {
            var tb = db.ThongBaos.Where(x => x.Ma_ND == maND && x.Trang_Thai == false);
            if (tb == null) Json(new { tt = false }, JsonRequestBehavior.AllowGet);

            foreach (var t in tb)
            {
                t.Trang_Thai = true;
            }
            db.SaveChanges();

            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }
    }
}