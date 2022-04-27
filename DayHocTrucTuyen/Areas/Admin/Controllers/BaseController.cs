using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DayHocTrucTuyen.Areas.Admin.Controllers
{
    public class BaseController : Controller
    {
        // GET: Admin/Base
        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null || sess.Loai != "Admin")
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Default", action = "Login", Area = "" }));
            }
            base.OnActionExecuted(filterContext);
        }
    }
}