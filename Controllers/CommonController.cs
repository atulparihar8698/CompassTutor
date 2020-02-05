using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Data;
using Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace CompassTutor.Controllers
{
    public class CommonController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CommonController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult SelectRole()
        {
            return View();
        }
        public IActionResult NotAccess()
        {
            return View();
        }
        public IActionResult RegistrationSuccess()
        {
            return View();
        }
        [HttpGet]
        public IEnumerable<Country> GetCountries()
        {
            return _context.Country.ToList(); ;
        }
        [HttpGet]
        public IEnumerable<State> GetStates(int id)
        {
            return _context.State.Where(s => s.CountryId == id).ToList();
        }
        [HttpGet]
        public IEnumerable<City> GetCities(int id)
        {
            return _context.City.Where(s => s.StateId == id).ToList();
        }
        [HttpGet]
        public IEnumerable<TimeZones> GetTimeZones()
        {
            return _context.TimeZones.ToList();
        }
        public IActionResult SignupUsers()
        {
           
            return View();
        }
        
        //Add New City via Tool Tip
        public IEnumerable<City> AddNewCity(string cname, int sid)
        {
            City newCity = new City();
            newCity.Name = cname;
            newCity.StateId = sid;
            _context.City.Add(newCity);
            _context.SaveChanges();
            return _context.City.OrderByDescending(c => c.Id).ToList();
        }

        [HttpGet]
        public JsonResult CheckDuplicate_City(string c_name, int s_id)
        {
            bool result = false;
            var CityCount = _context.City.Where(c => c.Name == c_name && c.StateId == s_id).ToList().Count();
            if (CityCount == 0)
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
        [HttpGet]
        //public JsonResult CheckDuplicate_Subject(string s_name)
        //{
        //    bool result = false;
        //    var SubjectCount = _context.Subjects.Where(c => c.Name == s_name).ToList().Count();
        //    if (SubjectCount == 0)
        //    {

        //        return Json(result);
        //    }
        //    else
        //    {
        //        // result = "YES";
        //        result = true;
        //        return Json(result);
        //    }
        //}

        [HttpGet]
        public JsonResult TotalSubjects_list(int id)
        {
            bool result = false;
            var subjects = _context.Subjects.Where(p => p.Id == id).FirstOrDefault();
            return Json(result);
        }

        ////Subject Topic Duplicate Check functionality Based on Subject
        //[HttpGet]
        //public JsonResult CheckDuplicate_SubjectTopic(string st_name, int s_id)
        //{
        //    bool result = false;
        //    var SubjectTopicCount = _context.SubjectTypes.Where(c => c.Name == st_name && c.SubjectId==s_id).ToList().Count();
        //    if (SubjectTopicCount == 0)
        //    {

        //        return Json(result);
        //    }
        //    else
        //    {
        //        // result = "YES";
        //        result = true;
        //        return Json(result);
        //    }
        //}
    }
}