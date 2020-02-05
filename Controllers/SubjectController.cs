using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Data;
using CompassTutor.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompassTutor.Controllers
{
    public class SubjectController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public SubjectController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;

        }
        [HttpGet]
        //public async Task<ActionResult<List<SubjectViewModel>>> Index()
        public IActionResult Index()
        {
            return View();
        }
        //public List<SubjectViewModel> Pagination_Subject()
        //{
        //    var subjectList = _context.Subjects.ToList();
        //    List<SubjectViewModel> subjectData = new List<SubjectViewModel>();
        //    foreach (var slist in subjectList)
        //    {
        //        SubjectViewModel svm = new SubjectViewModel();
        //        svm.SubjectId = slist.Id;
        //        svm.SubjectName = slist.Name;
        //        var topicList = _context.SubjectTypes.Where(c => c.SubjectId == slist.Id).Select(c => c.Name).ToList();
        //        svm.SubjectTopicName = String.Join(", ", topicList);
        //        subjectData.Add(svm);
        //    }
        //    ViewBag.subjects_topics = subjectData;

        //    return subjectData;


        //}
        //public List<Subject> Pagination_Subject()
        //{
        //    var subjectList = _context.Subjects.ToList();
        //    //List<SubjectViewModel> subjectData = new List<SubjectViewModel>();
        //    //foreach (var slist in subjectList)
        //    //{
        //    //    SubjectViewModel svm = new SubjectViewModel();
        //    //    svm.SubjectId = slist.Id;
        //    //    svm.SubjectName = slist.Name;
        //    //    var topicList = _context.SubjectTypes.Where(c => c.SubjectId == slist.Id).Select(c => c.Name).ToList();
        //    //    svm.SubjectTopicName = String.Join(", ", topicList);
        //    //    subjectData.Add(svm);
        //    //}
        //    //ViewBag.subjects_topics = subjectData;

        //    //return subjectData;
        //    return subjectList;


        //}
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Create(string subjectName)
        {
            bool result = false;
            if(subjectName !=null || subjectName != "")
            {
                Subject newSubject = new Subject();
                newSubject.Name = subjectName;
                _context.Subjects.Add(newSubject);
                _context.SaveChanges();
                result=true;
            }
            return Json(result);
        }

        //Get subjects 
        //public List<SubjectViewModel> GetSubject(int id)
        //{
        //    var subjectList = _context.Subjects.Where(c=>c.Id==id).ToList();
        //    List<SubjectViewModel> subjectData = new List<SubjectViewModel>();
        //    foreach (var slist in subjectList)
        //    {
        //        SubjectViewModel svm = new SubjectViewModel();
        //        svm.SubjectId = slist.Id;
        //        svm.SubjectName = slist.Name;
        //        var topicList = _context.SubjectTypes.Where(c => c.SubjectId == slist.Id).Select(c => c.Name).ToList();
        //        svm.SubjectTopicName = String.Join(", ", topicList);
        //        subjectData.Add(svm);
        //    }
        //    ViewBag.subjects_topics = subjectData;

        //    return subjectData;


        //}

        public JsonResult CheckDuplicate_Subject(string s_name,int id)
        {
            bool result = false;
            var SubjectCount = _context.Subjects.Where(c => c.Name == s_name && c.Id !=id).ToList().Count();
            if (SubjectCount == 0)
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
        public List<Subject> Pagination_Subject()
        {
            var SubtList = _context.Subjects.ToList();
           
            return SubtList;


        }
        public Subject GetSubject(int id)
        {
            var subject = _context.Subjects.Where(c => c.Id == id).FirstOrDefault();
           
            return subject;


        }
        public JsonResult Edit(string subjectName, int sid)
        {
            bool result = false;
           if(subjectName !=null && sid != 0)
            {
                var updateSubject = _context.Subjects.Where(c => c.Id == sid).FirstOrDefault();
                updateSubject.Name = subjectName;
                 _context.Entry(updateSubject).State = EntityState.Modified;
                _context.SaveChanges();
                result = true;
            }
            return Json(result);
        }
    }


}
