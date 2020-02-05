using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CompassTutor.Controllers
{
    public class LandingPageController : Controller
    {
        public IActionResult Index()
        {
            var user = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(user==null)
            {
                return View();
            }
            else
            {
                return Redirect("/Home/Index/");
            }
            
        }
    }
}