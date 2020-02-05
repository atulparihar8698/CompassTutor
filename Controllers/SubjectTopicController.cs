using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Data;
using CompassTutor.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace CompassTutor.Controllers
{
    public class SubjectTopicController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public SubjectTopicController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;

        }
        public IActionResult Index()
        {
            var SLIST = _context.Subjects.ToList();
            ViewBag.SubjectList = new SelectList(
              SLIST.OrderBy(q => q.Name).AsEnumerable().Select(x => new SelectListItem { Value = x.Id.ToString(), Text = x.Name }), "Value", "Text");
            return View();
        }
        public IEnumerable<Subject> GetSubjects()
        {
            return _context.Subjects.ToList();
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Create(string st_name, int s_id)
        {
            bool result = false;
            if(st_name !=null && s_id != 0)
            {
                SubjectType newSubjecttopic = new SubjectType();
                newSubjecttopic.Name = st_name;
                newSubjecttopic.SubjectId = s_id;
                _context.SubjectTypes.Add(newSubjecttopic);
                _context.SaveChanges();
                result = true;
            }
           
            return Json(result);
        }
        
        public List<SubjectType> Pagination_SubjectTopic()
        {
            var subjectTopicList = _context.SubjectTypes.ToList();
           
            return subjectTopicList;


        }

        public SubjectType GetSubjectTopic(int id)
        {
           
            var subjectTopic = _context.SubjectTypes.Where(c => c.Id == id).FirstOrDefault();
            return subjectTopic;
          
        }

        //Subject Topic Duplicate Check functionality Based on Subject
        [HttpGet]
        public JsonResult CheckDuplicate_SubjectTopic(string st_name, int s_id,int st_id)
        {
            bool result = false;
            var SubjectTopicCount = _context.SubjectTypes.Where(c => c.Name == st_name && c.SubjectId == s_id && c.Id !=st_id).ToList().Count();
            if (SubjectTopicCount == 0)
            {

                return Json(result);
            }
            else
            {
                // result = "YES";
                result = true;
                return Json(result);
            }
        }

        //Update Subject Topic Functionality
        public JsonResult Edit(int sid, int stid, string stname)
        {
            bool result = false;
            if (sid != 0 && stid != 0 && stname !=null)
            {
                var updateSubjectTopic = _context.SubjectTypes.Where(c => c.Id == stid).FirstOrDefault();
                updateSubjectTopic.SubjectId = sid;
                updateSubjectTopic.Name = stname;
                _context.Entry(updateSubjectTopic).State = EntityState.Modified;
                _context.SaveChanges();
                result = true;
            }
            return Json(result);
        }
    }
}