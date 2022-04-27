using DayHocTrucTuyen.Areas.User.Controllers;
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
    public class PostController : BaseController
    {
        // GET: Courses/Post
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        //Thêm mới bài đăng
        [HttpPost]
        public ActionResult createPost(string malop, string noidung)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            BaiDang newPost = new BaiDang();

            newPost.Ma_Bai = newPost.setMa(malop);
            newPost.Ma_Lop = malop;
            newPost.Ma_ND = sess.MaUser;
            newPost.Thoi_Gian = DateTime.Now;
            newPost.Noi_Dung = noidung;
            newPost.Trang_Thai = true;

            if (Request.Files.Count != 0)
            {
                var temp = "";
                var fileUpload = Request.Files;
                for (int i = 0; i < fileUpload.Count; i++)
                {
                    HttpPostedFileBase file = fileUpload[i];

                    var fileName = newPost.Ma_Bai + "-" + file.FileName;
                    var path = Path.Combine(Server.MapPath("~/Content/filePost"), fileName);
                    file.SaveAs(path);

                    temp += fileName + ",";
                }
                newPost.Dinh_Kem = temp.Substring(0, temp.Length - 1);
            }

            db.BaiDangs.Add(newPost);
            db.SaveChanges();

            //Gửi thông báo đến tất cả thành viên thuộc lớp
            NotificationController notification = new NotificationController();
            var lop = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == malop);
            var thanhvienlop = db.HocSinhThuocLops.Where(x => x.Ma_Lop == lop.Ma_Lop);
            foreach (var tvl in thanhvienlop)
            {
                notification.setThongBao(tvl.Ma_ND, "Bài đăng mới", "post" + "\\Từ lớp " + lop.Ten_Lop, "Courses/Room/Detail?Room=" + lop.Ma_Lop);
            }

            return Json(new { mess = "Thành công" }, JsonRequestBehavior.AllowGet);
        }

        //Khóa hoặc mở khóa bài đăng
        [HttpPost]
        public ActionResult setTrangThaiPost(string maPost)
        {
            var post = db.BaiDangs.FirstOrDefault(x => x.Ma_Bai == maPost);
            if (post == null)
            {
                return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
            }
            if (post.Trang_Thai) post.Trang_Thai = false;
            else post.Trang_Thai = true;

            db.SaveChanges();

            if (post.Trang_Thai)
            {
                return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
        }

        //Xóa bài đăng
        [HttpPost]
        public ActionResult deletePost(string maPost)
        {
            var post = db.BaiDangs.FirstOrDefault(x => x.Ma_Bai == maPost);
            if (post == null)
            {
                return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
            }
            //Xóa file đính kèm
            if (post.Dinh_Kem != null)
            {
                string[] list = post.Dinh_Kem.Split(',');
                foreach (string str in list)
                {
                    var path = Path.Combine(Server.MapPath("~/Content/filePost"), str);
                    if (System.IO.File.Exists(path))
                    {
                        System.IO.File.Delete(path);
                    };
                }
            }
            //Xóa bình luận
            if (post.getSLBinhLuan(post.Ma_Bai) != 0)
            {
                var listComment = db.BinhLuans.Where(x => x.Ma_Bai == post.Ma_Bai);
                foreach (var comment in listComment)
                {
                    db.BinhLuans.Remove(comment);
                }
            }
            //Xóa cảm xúc
            if (post.getSLCamXuc(post.Ma_Bai) != 0)
            {
                var listYT = db.CamXucs.Where(x => x.Ma_Bai == post.Ma_Bai);
                foreach (var yT in listYT)
                {
                    db.CamXucs.Remove(yT);
                }
            }
            //Xóa trạng thái ghim
            if (post.isGhim(post.Ma_Bai))
            {
                var ghim = db.Ghims.FirstOrDefault(x => x.Ma_Bai == post.Ma_Bai);
                db.Ghims.Remove(ghim);
            }

            db.BaiDangs.Remove(post);
            db.SaveChanges();

            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }

        //Set yêu thích bài đăng hoặc bỏ yêu thích
        [HttpPost]
        public ActionResult setLikePost(string maPost, string maND)
        {
            CamXuc yt = db.CamXucs.FirstOrDefault(x => x.Ma_Bai == maPost && x.Ma_ND == maND);
            BaiDang bd = new BaiDang();

            if (yt == null)
            {
                CamXuc newYT = new CamXuc();
                newYT.Ma_Bai = maPost;
                newYT.Ma_ND = maND;
                newYT.Thoi_Gian = DateTime.Now;

                db.CamXucs.Add(newYT);
                db.SaveChanges();
                return Json(new { tt = true, sl = bd.getSLCamXuc(maPost) }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                db.CamXucs.Remove(yt);
                db.SaveChanges();
                return Json(new { tt = false, sl = bd.getSLCamXuc(maPost) }, JsonRequestBehavior.AllowGet);
            }
        }

        //Thêm mới bình luận
        [HttpPost]
        public ActionResult createComment(string maPost, string nd)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            BinhLuan newBL = new BinhLuan();

            newBL.Ma_Bai = maPost;
            newBL.Ma_ND = sess.MaUser;
            newBL.Thoi_Gian = DateTime.Now;
            newBL.Noi_Dung = nd;

            if (Request.Files.Count != 0)
            {
                var temp = "";
                var fileUpload = Request.Files;
                for (int i = 0; i < fileUpload.Count; i++)
                {
                    HttpPostedFileBase file = fileUpload[i];

                    var fileName = newBL.Ma_Bai + "-" + newBL.Ma_ND + "-" + file.FileName;
                    var path = Path.Combine(Server.MapPath("~/Content/filePost"), fileName);
                    file.SaveAs(path);

                    temp += fileName + ",";
                }
                newBL.Dinh_Kem = temp.Substring(0, temp.Length - 1);
            }

            db.BinhLuans.Add(newBL);
            db.SaveChanges();

            var json = new
            {
                ma = sess.MaUser,
                anh = sess.Image,
                hoten = sess.HoLot + " " + sess.Ten,
                postId = newBL.Ma_Bai,
                postTime = newBL.Thoi_Gian.ToString(),
                postTimeCus = newBL.Thoi_Gian.ToString("yyyy-MM-dd'T'HH:mm:ss")
            };

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        //Xóa bình luận
        public ActionResult deleteComment(string maPost, DateTime thoigian)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];

            var del = db.BinhLuans.Where(x => x.Ma_Bai == maPost && x.Ma_ND == sess.MaUser);
            foreach (var i in del)
            {
                if (i.Thoi_Gian.ToString() == thoigian.ToString())
                {
                    db.BinhLuans.Remove(i);
                }
            }
            db.SaveChanges();
            return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
        }

        //Set ghim hoặc bỏ ghim bài đăng
        [HttpPost]
        public ActionResult setGhim(string maPost)
        {
            var ghim = db.Ghims.FirstOrDefault(x => x.Ma_Bai == maPost);
            if (ghim == null)
            {
                Ghim newGhim = new Ghim();
                newGhim.Ma_Bai = maPost;
                newGhim.Thoi_Gian = DateTime.Now;
                db.Ghims.Add(newGhim);
                db.SaveChanges();

                return Json(new { tt = true }, JsonRequestBehavior.AllowGet);
            }
            db.Ghims.Remove(ghim);
            db.SaveChanges();

            return Json(new { tt = false }, JsonRequestBehavior.AllowGet);
        }

        //Get file
        public FileResult getFile(string fileName)
        {
            var path = Path.Combine(Server.MapPath("~/Content/filePost"), Path.GetFileName(fileName));
            var name = fileName.Substring(16);
            return File(path, "application/force-download", name);
        }

        //Xem file pdf trên trình duyệt
        public ActionResult ViewPDF(string fileName)
        {
            if (fileName == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            ViewBag.FileName = fileName;
            return View();
        }
    }
}