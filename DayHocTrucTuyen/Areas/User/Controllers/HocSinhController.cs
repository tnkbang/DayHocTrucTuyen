using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.User.Controllers
{
    public class HocSinhController : BaseController
    {
        // GET: User/HocSinh
        public ActionResult Index()
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess != null && sess.Loai != "HocSinh") return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            return View();
        }
    }
}