using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;


namespace DayHocTrucTuyen.Controllers
{
    public class DefaultController : Controller
    {
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        // GET: Default
        //Trang chủ
        public ActionResult Index()
        {
            ViewBag.Courses = db.LopHocs.Count();
            ViewBag.GV = db.NguoiDungs.Where(x => x.Ma_Loai == "03").Count();
            ViewBag.HS = db.NguoiDungs.Where(x => x.Ma_Loai == "04").Count();
            ViewBag.TV = db.NguoiDungs.Count();
            ViewData["Room"] = db.LopHocs.OrderByDescending(x=>x.Ngay_Tao).ToList();
            return View();
        }
        //trang đăng nhập
        public ActionResult Login()
        {
            ViewBag.members = db.NguoiDungs.Count();
            ViewBag.classroom = db.LopHocs.Count();
            return View();
        }
        //Trang đăng ký
        public ActionResult Register()
        {
            ViewBag.members = db.NguoiDungs.Count();
            ViewBag.classroom = db.LopHocs.Count();
            return View();
        }
        //Trang chọn giáo viên hoặc học sinh
        public ActionResult Education()
        {
            ViewBag.members = db.NguoiDungs.Count();
            ViewBag.classroom = db.LopHocs.Count();
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if(sess == null)
            {
                return RedirectToAction("Login", "Default");
            }
            if(sess.Loai != "User")
            {
                return new HttpStatusCodeResult(HttpStatusCode.Unauthorized);
            }
            return View();
        }
        //Trang danh sách lớp học
        public ActionResult Courses()
        {
            List<LopHoc> room = db.LopHocs.OrderByDescending(x => x.Ngay_Tao).ToList();
            return View(room);
        }

        //Trang liên hệ
        public ActionResult Contact()
        {
            return View();
        }
        //Lấy thông tin đăng nhập
        public ActionResult getLogin(string email, string pass)
        {
            Session.Clear();
            var user = new NguoiDung();
            var tempPass = user.mahoaMatKhau(pass);
            user = db.NguoiDungs.FirstOrDefault(x => x.Email == email && x.Mat_Khau == tempPass);
            if (user != null)
            {
                var userSession = new UserLogin();
                userSession.MaUser = user.Ma_ND;
                userSession.HoLot = user.Ho_Lot;
                userSession.Ten = user.Ten;
                userSession.Image = user.Img_Avt;

                if (user.Trang_Thai == true)
                {
                    if (user.Ma_Loai == "01")
                    {
                        userSession.Loai = "Admin";
                    }
                    if (user.Ma_Loai == "02")
                    {
                        userSession.Loai = "User";
                    }
                    if (user.Ma_Loai == "03")
                    {
                        userSession.Loai = "GiaoVien";
                    }
                    if (user.Ma_Loai == "04")
                    {
                        userSession.Loai = "HocSinh";
                    }
                    Session.Add(SessionLogin.SESSION_LOGIN, userSession);
                    return Json(new { tt = true, mess = "Đăng nhập thành công với tài khoản: " + userSession.HoLot + " " + userSession.Ten }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { tt = false, mess = "Tài khoản của bạn đã bị khóa !<br>Vui lòng liên hệ với Admin để được hỗ trợ !" }, JsonRequestBehavior.AllowGet);
                }
            }
            return Json(new { tt = false, mess = "Email hoặc mật khẩu chưa chính xác !" }, JsonRequestBehavior.AllowGet);
        }
        //Đăng xuất
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            Session.Clear();
            return Json(new { tt = true, mess = "Đăng xuất thành công !" }, JsonRequestBehavior.AllowGet);
        }
        //Kiểm tra email có tồn tại trên hệ thống chưa
        public ActionResult ktEmail(string email)
        {
            var temp = db.NguoiDungs.FirstOrDefault(x => x.Email == email);
            if (temp != null)
            {
                return Json(new { email = false }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { email = true }, JsonRequestBehavior.AllowGet);
        }
        //Đăng nhập với tài khoản google
        [AllowCrossSite]
        public ActionResult loginWithGoogle(string hoten, string email, HttpPostedFileBase img_avt)
        {
            var user = db.NguoiDungs.FirstOrDefault(x => x.Email == email);
            if(user == null)
            {
                createAccount(hoten.Substring(0, hoten.LastIndexOf(' ')), hoten.Substring(hoten.LastIndexOf(' ') + 1), email, "userloginwithgoogle" + email);
                var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
                if (sess != null && img_avt != null)
                {
                    var userLogin = db.NguoiDungs.FirstOrDefault(x => x.Ma_ND == sess.MaUser);
                    string file_extension = Path.GetFileName(img_avt.FileName).Substring(Path.GetFileName(img_avt.FileName).LastIndexOf('.'));
                    var fileName = "avt-" + sess.MaUser + "-" + DateTime.Now.Millisecond + file_extension;
                    var path = Path.Combine(Server.MapPath("~/Content/Img/userAvt"), fileName);
                    img_avt.SaveAs(path);
                    userLogin.Img_Avt = fileName;
                    db.SaveChanges();
                }
            }
            getLogin(email, "userloginwithgoogle" + email);
            return Json(new { tt = false, mess = "Đăng nhập thành công !" }, JsonRequestBehavior.AllowGet);
        }
        //Tạo mới tài khoản
        public ActionResult createAccount(string holot, string ten, string email, string matkhau)
        {
            if(ten == "" || email == "" || matkhau == "")
            {
                return Json(new { tt = false, erro = "form", mess = "Chưa nhập đủ thông tin !<br>Tên, email và mật khẩu là bắt buộc." }, JsonRequestBehavior.AllowGet);
            }
            var emailCheck = db.NguoiDungs.FirstOrDefault(x => x.Email == email);
            if(emailCheck != null)
            {
                return Json(new { tt = false, erro = "email", mess = "Email đã tồn tại trên hệ thống !" }, JsonRequestBehavior.AllowGet);
            }

            NguoiDung newUser = new NguoiDung();
            newUser.Ma_ND = newUser.setMaUser();
            newUser.Ma_Loai = "02";
            newUser.Ho_Lot = holot;
            newUser.Ten = ten;
            newUser.Email = email;
            newUser.Mat_Khau = newUser.mahoaMatKhau(matkhau);
            newUser.Bi_Danh = newUser.Ma_ND;
            newUser.Trang_Thai = true;
            newUser.Ngay_Tao = newUser.setNgayTao();

            db.NguoiDungs.Add(newUser);
            db.SaveChanges();

            getLogin(newUser.Email, matkhau);
            return Json(new { tt = true, mess = "Đăng ký tài khoản thành công !" }, JsonRequestBehavior.AllowGet);
        }
        //Chọn giáo viên hoặc học sinh
        public ActionResult choseEducation(string uid, string cv)
        {
            var user = db.NguoiDungs.FirstOrDefault(x => x.Ma_ND == uid);
            user.Ma_Loai = cv;
            db.SaveChanges();

            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if(cv == "03")
            {
                sess.Loai = "GiaoVien";
            }
            else
            {
                sess.Loai = "HocSinh";
            }

            return Json(new { tt = true, mess = "Chọn chức vụ thành công !" }, JsonRequestBehavior.AllowGet);
        }
    }
}