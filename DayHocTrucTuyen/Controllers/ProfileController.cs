using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Controllers
{
    public class ProfileController : Controller
    {
        // GET: Profile
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        //Trang thông tin người dùng
        public ActionResult Info(string User)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            NguoiDung userMa = db.NguoiDungs.FirstOrDefault(x => x.Ma_ND == User);
            NguoiDung userBiDanh = db.NguoiDungs.FirstOrDefault(x => x.Bi_Danh == User);
            if (userMa == null && userBiDanh == null || User == null)
            {
                //Response.StatusCode = 404;
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            if(userMa == null)
            {
                setXemTrang(userBiDanh.Ma_ND, sess.MaUser);
                ViewData["userView"] = userView(userBiDanh.Ma_ND);
                ViewData["userLike"] = userLike(userBiDanh.Ma_ND);
                return View(userBiDanh);
            }
            setXemTrang(userMa.Ma_ND, sess.MaUser);
            ViewData["userView"] = userView(userMa.Ma_ND);
            ViewData["userLike"] = userLike(userMa.Ma_ND);
            return View(userMa);
        }
        //Hàm set xem trang
        public void setXemTrang(string nd, string nx)
        {
            if (nd == nx) return;
            XemTrang xt = db.XemTrangs.Where(x => x.Nguoi_Dung == nd && x.Nguoi_Xem == nx).OrderByDescending(x => x.Ma_XT).FirstOrDefault();
            if(xt != null)
            {
                TimeSpan minTime = new TimeSpan(24, 0, 0);
                if(DateTime.Now - xt.Thoi_Gian > minTime)
                {
                    XemTrang newXT = new XemTrang();
                    newXT.Ma_XT = newXT.setMa(nd);
                    newXT.Nguoi_Dung = nd;
                    newXT.Nguoi_Xem = nx;
                    newXT.Thoi_Gian = DateTime.Now;

                    db.XemTrangs.Add(newXT);
                    db.SaveChanges();
                }
            }
            else
            {
                XemTrang newXT = new XemTrang();
                newXT.Ma_XT = newXT.setMa(nd);
                newXT.Nguoi_Dung = nd;
                newXT.Nguoi_Xem = nx;
                newXT.Thoi_Gian = DateTime.Now;

                db.XemTrangs.Add(newXT);
                db.SaveChanges();
            }
        }
        //Hàm set thích trang
        public ActionResult setThichTrang(string nd, string nt)
        {
            if (nd == nt) return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
            ThichTrang yt = db.ThichTrangs.Where(x => x.Nguoi_Dung == nd && x.Nguoi_Thich == nt).OrderByDescending(x => x.Ma_YT).FirstOrDefault();
            if(yt != null)
            {
                TimeSpan minTime = new TimeSpan(24, 0, 0);
                if (DateTime.Now - yt.Thoi_Gian > minTime)
                {
                    ThichTrang newYT = new ThichTrang();
                    newYT.Ma_YT = newYT.setMa(nd);
                    newYT.Nguoi_Dung = nd;
                    newYT.Nguoi_Thich = nt;
                    newYT.Thoi_Gian = DateTime.Now;

                    db.ThichTrangs.Add(newYT);
                    db.SaveChanges();
                }
            }
            else
            {
                ThichTrang newYT = new ThichTrang();
                newYT.Ma_YT = newYT.setMa(nd);
                newYT.Nguoi_Dung = nd;
                newYT.Nguoi_Thich = nt;
                newYT.Thoi_Gian = DateTime.Now;

                db.ThichTrangs.Add(newYT);
                db.SaveChanges();
            }
            return Json( new {tt = true}, JsonRequestBehavior.AllowGet);
        }
        public List<NguoiDung> userView(string nd)
        {
            List<NguoiDung> user = (from u in db.NguoiDungs
                                     join xt in db.XemTrangs on u.Ma_ND equals xt.Nguoi_Xem
                                     where xt.Nguoi_Dung == nd
                                     select u).ToList();
            return user;
        }
        public List<NguoiDung> userLike(string nd)
        {
            List<NguoiDung> user = (from u in db.NguoiDungs
                                     join yt in db.ThichTrangs on u.Ma_ND equals yt.Nguoi_Thich
                                     where yt.Nguoi_Dung == nd
                                     select u).ToList();
            return user;
        }
    }
}