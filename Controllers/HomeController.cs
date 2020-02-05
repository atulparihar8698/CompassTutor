using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CompassTutor.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using CompassTutor.Data;
using Microsoft.AspNetCore.Http;
using Data.Models;

namespace CompassTutor.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        private readonly ISession session;

        //public HomeController(ApplicationDbContext context)
        //{
        //    _context = context;
        //}
        public HomeController(UserManager<ApplicationUser> userManager, ApplicationDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _context = context;
           session = httpContextAccessor.HttpContext.Session;
        }
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

        public async Task<IActionResult> Index()
        {
            // var userId = _userManager.GetUserId(HttpContext.User);

            var user = await GetCurrentUserAsync();

            var userId = user?.Id;
            string mail = user?.Email;
            string rolename = user?.Role;
            TempData["userid"] = userId;
            // await InsertRoleUserid(rolename);
        
            await _userManager.AddToRoleAsync(user, rolename);
            var roles = await _userManager.GetRolesAsync(user);
        
           var existencetutor = _context.Tutor.Where(t => t.IdentityId == userId).FirstOrDefault();
           var existencestudent = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
            if (existencetutor != null && existencestudent == null)
            {
                if (mail == "admin@gmail.com")
                {
                    session.SetString("image", "/img/user.jpg");
                    return View();
                }
                else if (roles.Count == 0)
                {
                    session.SetString("image", "/img/user.jpg");
                    return RedirectToAction(nameof(CommonController.SelectRole), "Common");
                }

                else if (existencetutor.IsApproved == true && existencestudent == null)
                {
                    session.SetString("image", existencetutor.ProfilePic);
                    session.SetString("firstname", existencetutor.FirstName);
                    DashboardViewModel obj = new DashboardViewModel();
                    obj.Roles = rolename;                   
                    obj.TotalStudents = _context.Student.ToList().Count();
                    obj.ActiveTutors = _context.Tutor.Where(c => c.IsApproved == true).ToList().Count();
                    obj.ActiveStudents = _context.Student.Where(c => c.IsApproved == true).ToList().Count();
                 
                    obj.InActiveStudents = _context.Student.Where(c => c.IsApproved == false).ToList().Count();
                    //totoal slots and schedules
                    var ObjTuotr = _context.Tutor.Where(c => c.IdentityId == userId).FirstOrDefault();
                    var objSchedule = _context.Slots.Where(c => c.TutorId == ObjTuotr.Id).ToList();
                    List<Schedule> newScheduleList = new List<Schedule>();
                    foreach (var s in objSchedule)
                    {
                        Schedule slist = new Schedule();
                        var scheduledata = _context.Schedule.Where(c => c.SlotId == s.Id).FirstOrDefault();
                        if(scheduledata != null)
                        {
                            slist = scheduledata;
                            newScheduleList.Add(slist);
                        }
                        
                    }
                    obj.BookedSlots = newScheduleList.Count();
                    obj.TotalSchedules = objSchedule.Count();
                    obj.TutorAvailableSlots = obj.TotalSchedules - obj.BookedSlots;

                    return View(obj);
                }
                else if (existencetutor.IsApproved == false|| existencetutor.IsApproved == null && existencestudent == null)
                {
                    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                }
                //else if (existencestudent.IsApproved == true && existencetutor == null)
                //{
                //    session.SetString("image", existencestudent.Profile);
                //    return View();
                //}
                //else if (existencestudent.IsApproved == false && existencetutor == null)
                //{
                //    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                //}

                else if (roles[0] == "Tutor")
                {
                    return RedirectToAction(nameof(TutorController.ProfileEdit), "Tutor");
                }
                else if (roles[0] == "Student")
                {
                    return RedirectToAction(nameof(StudentController.ProfileEdit), "Student");
                }
                return View();
            }
            else if(existencestudent != null && existencetutor == null)
            {
                if (mail == "admin@gmail.com")
                {
                    session.SetString("image", "/img/user.jpg");
                    return View();
                }
                else if (roles.Count == 0)
                {
                    session.SetString("image", "/img/user.jpg");
                    return RedirectToAction(nameof(CommonController.SelectRole), "Common");
                }

                //else if (existencetutor.IsApproved == true && existencestudent == null)
                //{
                //    session.SetString("image", existencetutor.ProfilePic);
                //    return View();
                //}
                //else if (existencetutor.IsApproved == false && existencestudent == null)
                //{
                //    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                //}
                else if (existencestudent.IsApproved == true && existencetutor == null)
                {
                   // var existencestudent1 = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
                    session.SetString("image", existencestudent.Profile);
                    session.SetString("firstname", existencestudent.FirstName);
                    DashboardViewModel obj = new DashboardViewModel();
                    obj.Roles = rolename;                  
                    obj.TotalTutors = _context.Tutor.ToList().Count();                    
                    obj.ActiveTutors = _context.Tutor.Where(c => c.IsApproved == true).ToList().Count();

                    var ObjStudent = _context.Student.Where(c => c.IdentityId == userId).FirstOrDefault();

                    var objSchedule = _context.Schedule.Where(c => c.StudentId == ObjStudent.Id).ToList();
                    int Completedcount = 0;
                    int Upcomingcount = 0;
                    foreach(var cmp in objSchedule)
                    {
                        if (cmp.Date < DateTime.Now)
                        {
                            ++Completedcount;
                        }
                        if (cmp.Date > DateTime.Now)
                        {
                            ++Upcomingcount;
                        }
                    }
                    obj.StudentSlots = objSchedule.Count();
                    obj.CompletedSchedules = Completedcount;
                    obj.UpcomingSchedules = Upcomingcount;
                    return View(obj);
                }
                else if (existencestudent.IsApproved == false || existencestudent.IsApproved == null && existencetutor == null)
                {
                    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                }

                else if (roles[0] == "Tutor")
                {
                    return RedirectToAction(nameof(TutorController.ProfileEdit), "Tutor");
                }
                else if (roles[0] == "Student")
                {
                    return RedirectToAction(nameof(StudentController.ProfileEdit), "Student");
                }
                return View();
            }


            else if (existencestudent == null && existencetutor == null)
            {
                if (mail == "admin@gmail.com")
                {
                    DashboardViewModel obj = new DashboardViewModel();
                    obj.Roles = rolename;
                    obj.TotalTutors = _context.Tutor.ToList().Count();
                    obj.TotalStudents = _context.Student.ToList().Count();
                    obj.ActiveTutors = _context.Tutor.Where(c=>c.IsApproved==true).ToList().Count();
                    obj.ActiveStudents = _context.Student.Where(c => c.IsApproved == true).ToList().Count();
                    obj.InActiveTutors = _context.Tutor.Where(c=>c.IsApproved==false).ToList().Count();
                    obj.InActiveStudents = _context.Student.Where(c => c.IsApproved == false).ToList().Count();
                    session.SetString("image", "/img/user.jpg");

                    return View(obj);
                }
                else if (roles.Count == 0)
                {
                    session.SetString("image", "/img/user.jpg");
                    return RedirectToAction(nameof(CommonController.SelectRole), "Common");
                }

                //else if (existencetutor.IsApproved == true && existencestudent == null)
                //{
                //    session.SetString("image", existencetutor.ProfilePic);
                //    return View();
                //}
                //else if (existencetutor.IsApproved == false && existencestudent == null)
                //{
                //    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                //}
                //else if (existencestudent.IsApproved == true && existencetutor == null)
                //{
                //    session.SetString("image", existencestudent.Profile);
                //    return View();
                //}
                //else if (existencestudent.IsApproved == false && existencetutor == null)
                //{
                //    return RedirectToAction(nameof(CommonController.NotAccess), "Common");
                //}

                else if (roles[0] == "Tutor"&& existencetutor == null)
                {
                    session.SetString("firstname", "");
                    session.SetString("image", "/img/user.jpg");
                    return RedirectToAction(nameof(TutorController.ProfileEdit), "Tutor");
                }
                else if (roles[0] == "Student"&& existencestudent == null)
                {
                    session.SetString("firstname", "");
                    session.SetString("image", "/img/user.jpg");
                    return RedirectToAction(nameof(StudentController.ProfileEdit), "Student");
                }
                return View();
            }
            return View();

        }



        



        public async Task<IActionResult> InsertRoleUserid(string rolename)
        {

            var user = await GetCurrentUserAsync();

            var userId = user?.Id;
            string mail = user?.Email;
            await _userManager.AddToRoleAsync(user, rolename);
            var roles = await _userManager.GetRolesAsync(user);
            //TempData["RoleName"] = roles[0];
            //HttpContext.Session.SetString("RoleName", roles[0]);
            if (roles[0] == "Tutor" )
            {
                
                // TempData["RoleName"] = "Tutor";
                return RedirectToAction(nameof(TutorController.ProfileEdit), "Tutor");
            }
            else 
            {
                return RedirectToAction(nameof(StudentController.ProfileEdit), "Student");
            }
            //return RedirectToAction(nameof(StudentController.ProfileEdit), "Student");
        }
        // }
        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
