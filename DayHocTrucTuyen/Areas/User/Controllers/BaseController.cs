using DayHocTrucTuyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DayHocTrucTuyen.Areas.User.Controllers
{
    public class BaseController : Controller
    {
        // GET: User/Base
        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var sess = (UserLogin)Session[SessionLogin.SESSION_LOGIN];
            if (sess == null)
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Default", action = "Login", Area = "" }));
            }
            else if (sess.Loai == "User")
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Default", action = "Education", Area = "" }));
            }
            base.OnActionExecuted(filterContext);
        }
    }
}