using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DayHocTrucTuyen.Areas.Admin.Controllers
{
    public class HomeController : BaseController
    {
        // GET: Admin/Home
        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Info(string UID)
        {
            NguoiDung nguoidung = db.NguoiDungs.FirstOrDefault(x => x.Ma_ND == UID);
            if(nguoidung == null)
            {
                Response.StatusCode = 404;
                return null;
            }
            return View(nguoidung);
        }
    }
}