using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.User.Controllers
{
    public class GiaoVienController : BaseController
    {
        // GET: User/GiaoVien
        public ActionResult Index()
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if(sess != null && sess.Loai != "GiaoVien") return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            return View();
        }
    }
}