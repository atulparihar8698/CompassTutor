using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Data;
using CompassTutor.Models;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace CompassTutor.Controllers
{
    public class TutorController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public TutorController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;

        }
        public IActionResult Index(string text)
        {
            ViewBag.Status = text;
            return View();
        }
        public IActionResult SearchTutorSubject(string term)
   {

            return Json(_context.Subjects.Where(p => p.Name.Contains(term))/*.Select(p => p.Name)*/.ToList());
            //var list = (from s in _context.Subjects
            //            where term.Contains(s.Name)
            //            select new Subject
            //            {
            //                Id = s.Id,
            //                Name = s.Name
            //            }).ToList();

            //return list;

        }


        //public List<Subject> SearchTutorrelatedSubjects(string term,int id)
        //{


        //    //return Json(_context.Subjects.Where(p => p.Name.Contains(term))/*.Select(p => p.Name)*/.ToList());
        //    var list = (from t in _context.Tutor join sub in _context.Subjects on t.Id equals id
        //                where sub.Id.ToString().Contains(t.SubjectId) &&
        //                 term.Contains(sub.Name)
        //                select new Subject
        //                {
        //                    Id = sub.Id,
        //                    Name = sub.Name
        //                }).ToList();

        //    return list;

        //}

        //public List<Tutor> GetSearchTutors(string ids)
        //{
        //    List<Tutor> Slotdata = new List<Tutor>();

        //    if (ids == null)
        //    {
        //        Slotdata = _context.Tutor.ToList();
        //        return Slotdata;
        //    }
        //    else
        //    {
        //        var arr_list = ids.Split(',').ToList();
        //        var list = _context.Tutor.ToList();
        //        List<Tutor> subid = new List<Tutor>();

        //            foreach (var item in list)
        //            {
        //                var subidslist=item.SubjectId.Split(',').ToList();
        //                foreach (var item1 in arr_list)
        //                {
        //                    foreach (var item2 in subidslist)
        //                    {
        //                        if (item1 == item2&& item.IsApproved==true)
        //                        {
        //                            Tutor newTutorlist = new Tutor();
        //                            newTutorlist = item;
        //                            subid.Add(newTutorlist);
        //                        }
        //                    }
        //                }



        //                //Tutor objSD = new Tutor();
        //                //objSD = _context.Tutor.Where(p => p.Date >= startdate && p.Date <= enddate && p.SlotId == item.Id).FirstOrDefault();
        //                //if (objSD != null)
        //                //{
        //                //    Slotdata.Add(objSD);
        //                //}

        //            }


        //        Slotdata = _context.Tutor.Where(c => arr_list.Contains(c.SubjectId)).ToList();

        //         var listre = subid.Distinct().ToList();
        //        List<SubjectTypesBySubject> subnamelist = new List<SubjectTypesBySubject>();
        //        foreach (var item in listre)
        //        {
        //            SubjectTypesBySubject subname = new SubjectTypesBySubject();
        //            var snameList = item.SubjectId.Split(',').ToList();
        //            var snameslist = _context.Subjects.Where(c => snameList.Contains(c.Id.ToString())).Select(c => c.Name).ToList();
        //            subname.SubjectName = String.Join(", ", snameslist);

        //            subnamelist.Add(subname);

        //        }
        //        //listre.AddRange(subnamelist);
        //        return listre;
        //    }




        //}
        public List<Tutor> GetSearchTutors(string ids)
        {
            List<Tutor> Slotdata = new List<Tutor>();

            if (ids == null)
            {
                Slotdata = _context.Tutor.Where(c => c.IsApproved == true).ToList();
                return Slotdata;

            }
            else
            {
                var arr_list = ids.Split(',').ToList();
                var list = _context.Tutor.ToList();
                List<Tutor> subid = new List<Tutor>();

                foreach (var item in list)
                {
                    var subidslist = item.SubjectId.Split(',').ToList();
                    foreach (var item1 in arr_list)
                    {
                        foreach (var item2 in subidslist)
                        {
                            if (item1 == item2 && item.IsApproved == true)
                            {
                                Tutor newTutorlist = new Tutor();
                                newTutorlist = item;

                                subid.Add(newTutorlist);
                            }
                        }
                    }
                }


                // Slotdata = _context.Tutor.Where(c => arr_list.Contains(c.SubjectId)).ToList();

                var listre = subid.Distinct().ToList();
                List<Tutor> newTutorwithSubject = new List<Tutor>();
                foreach (var newT in listre)
                {
                    Tutor objTutor = new Tutor();
                    objTutor = newT;
                    if (objTutor.SubjectId != null || objTutor.SubjectId != "")
                    {
                        var subjectIdList = objTutor.SubjectId.Split(',').ToList();
                        List<Subject> newNameslist = new List<Subject>();
                        foreach (var sub in subjectIdList)
                        {
                            Subject subname = new Subject();
                            subname.Name = _context.Subjects.Where(c => c.Id == Convert.ToInt32(sub)).Select(c => c.Name).FirstOrDefault(); ;
                            newNameslist.Add(subname);
                        }
                        objTutor.SubjectId = String.Join(", ", newNameslist.Select(c => c.Name));
                    }
                    newTutorwithSubject.Add(objTutor);
                }

                return newTutorwithSubject;
            }




        }




        public IEnumerable<Subject> GetSubjects()
        {
            return _context.Subjects.ToList();
        }
        [HttpGet]
        public IEnumerable<SubjectType> GetSubjectTypes(string id)
        {
            var subjidlist = id.Trim().Split(',').ToList();
            //return _context.SubjectTypes.Where(s => s.SubjectId == id).ToList();
            var list = _context.SubjectTypes.Where(s => subjidlist.Contains(s.SubjectId.ToString())).ToList();
            return list;
        }
        //public IEnumerable<SubjectType> GetSubjectTypes(int id)
        //{
        //    return _context.SubjectTypes.Where(s => s.SubjectId == id).ToList();
        //}
        public async Task<IActionResult> ProfileView(int id)
        {
            if (id == 0)
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var tutor1 = _context.Tutor.Where(t => t.IdentityId == userId).FirstOrDefault();
                var tutor = _context.Tutor.Include(r => r.Country).Where(r => r.CountryId == r.Country.Id && r.Id == tutor1.Id).FirstOrDefault();
                //HttpContext.Session.SetString("image", tutor.ProfilePic);
                var state = _context.State.Where(t => t.Id == tutor.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == tutor.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == tutor.TimeZoneId).FirstOrDefault();
                var hours = _context.Slots.Where(t => t.TutorId == tutor1.Id && t.ScheduleDateTime < DateTime.Now).Count();
                var hoursget = hours * 30 / 60;
                ViewBag.hours = hoursget;
                ViewData["tutorprofile"] = null;
     
                var subjlist = tutor.SubjectId.Split(',').ToList();
                var subjects = _context.Subjects.Where(c => subjlist.Contains(c.Id.ToString())).Select(c => new { c.Id, c.Name }).ToList();

                var slist = tutor.SubjectTypeId.Split(',').ToList();
                var subjtypeslist = new List<SubjectTypesBySubject>();
                foreach (var s in subjects)
                {
                    SubjectTypesBySubject stbs = new SubjectTypesBySubject();
                    stbs.SubjectName = s.Name;
                    var stypes = _context.SubjectTypes.Where(c => slist.Contains(c.Id.ToString()) && c.SubjectId == s.Id).Select(c => c.Name).ToList();
                    stbs.SubjectTypeName = String.Join(", ", stypes);
                    subjtypeslist.Add(stbs);

                }
                ViewBag.SubsTypeNames = subjtypeslist;

                string dobvalue = tutor.DOB != null ? tutor.DOB.Value.ToString("MM/dd/yyyy") : "N/A";
                ViewBag.dob = dobvalue;

                DateTime startdate = DateTime.Now;
                DateTime enddate = DateTime.Now;
                    enddate = enddate.AddDays(7);
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= startdate && p.ScheduleDateTime <= enddate && p.TutorId == tutor1.Id).ToList();
                List<ScheduleData> Sdata = new List<ScheduleData>();
                //var timezone = _context.TimeZones.Where(p => p.Id == id).FirstOrDefault();
                foreach (var item in date)
                {
                    ScheduleData objSD = new ScheduleData();
                    objSD.Date = item.ScheduleDateTime.ToString("MM/dd/yyyy");
                  //  objSD.Time = item.ScheduleDateTime.TimeOfDay;
                    //time = dt.ToString("HH:mm tt");
                    var dplist = objSD.Date.Split('/');
                    DateTime dt = new DateTime(Convert.ToInt32(dplist[2]), Convert.ToInt32(dplist[0]), Convert.ToInt32(dplist[1]));
                    objSD.Day = dt.DayOfWeek.ToString();
                    DateTime utcTime = Convert.ToDateTime(item.Time).ToUniversalTime();
                    TimeZoneInfo timeInfo = TimeZoneInfo.FindSystemTimeZoneById(timeZone.Title.Trim());
                    DateTime estDt = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeInfo);
                    objSD.Time = estDt.ToString("HH:mm tt");


                    //objSD.Time = item.ScheduleDateTime.ToString("HH:mm tt");
                    Sdata.Add(objSD);
                }
                ViewBag.Scheduledata = Sdata;
               
                return View(tutor);
            }
            else
            {
                var tutor = _context.Tutor.Include(r => r.Country).Where(r => r.CountryId == r.Country.Id && r.Id == id).FirstOrDefault();
                //HttpContext.Session.SetString("image", tutor.ProfilePic);
                var state = _context.State.Where(t => t.Id == tutor.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == tutor.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == tutor.TimeZoneId).FirstOrDefault();
                var hours = _context.Slots.Where(t => t.TutorId == tutor.Id && t.ScheduleDateTime < DateTime.Now).Count();
                var hoursget = hours * 30 / 60;
                ViewBag.hours = hoursget;
                ViewData["tutorprofile"] = tutor;
                
                var subjlist = tutor.SubjectId.Split(',').ToList();
                var subjects = _context.Subjects.Where(c => subjlist.Contains(c.Id.ToString())).Select(c => new { c.Id, c.Name }).ToList();

                var slist = tutor.SubjectTypeId.Split(',').ToList();
                var subjtypeslist = new List<SubjectTypesBySubject>();
                foreach (var s in subjects)
                {
                    SubjectTypesBySubject stbs = new SubjectTypesBySubject();
                    stbs.SubjectName = s.Name;
                    var stypes = _context.SubjectTypes.Where(c => slist.Contains(c.Id.ToString()) && c.SubjectId == s.Id).Select(c => c.Name).ToList();
                    stbs.SubjectTypeName = String.Join(", ", stypes);
                    subjtypeslist.Add(stbs);

                }
                ViewBag.SubsTypeNames = subjtypeslist;

                string dobvalue = tutor.DOB != null ? tutor.DOB.Value.ToString("MM/dd/yyyy") : "N/A";
                ViewBag.dob = dobvalue;

                DateTime startdate = DateTime.Now;
                DateTime enddate = DateTime.Now;
                enddate = enddate.AddDays(7);
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= startdate && p.ScheduleDateTime <= enddate && p.TutorId == tutor.Id).ToList();
                List<ScheduleData> Sdata = new List<ScheduleData>();

                //var user = await GetCurrentUserAsync();
                //var userId = user?.Id;
                //var student = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
                var student = _context.Tutor.Where(t => t.IdentityId == tutor.IdentityId).FirstOrDefault();
                var timestudentzone= _context.TimeZones.Where(t => t.Id == student.TimeZoneId).FirstOrDefault();
                foreach (var item in date)
                {
                    ScheduleData objSD = new ScheduleData();
                    objSD.Date = item.ScheduleDateTime.ToString("MM/dd/yyyy");
                    //  objSD.Time = item.ScheduleDateTime.TimeOfDay;
                    //time = dt.ToString("HH:mm tt");
                    var dplist = objSD.Date.Split('/');
                    DateTime dt = new DateTime(Convert.ToInt32(dplist[2]), Convert.ToInt32(dplist[0]), Convert.ToInt32(dplist[1]));
                    objSD.Day = dt.DayOfWeek.ToString();
                    DateTime utcTime = Convert.ToDateTime(item.Time).ToUniversalTime();
                    TimeZoneInfo timeInfo = TimeZoneInfo.FindSystemTimeZoneById(timestudentzone.Title.Trim());
                    DateTime estDt = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeInfo);
                    objSD.Time = estDt.ToString("HH:mm tt");
                    //objSD.Time = item.ScheduleDateTime.ToString("HH:mm tt");
                    Sdata.Add(objSD);
                }
                ViewBag.Scheduledata = Sdata;

                return View(tutor);

            }
         
        }

        
        public async Task<IActionResult> StudentProfileView(int id)
        {
            //id = 32;
            if (id == 0)
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var tutor1 = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
                var student = _context.Student.Include(r => r.Country).Where(r => r.Id == tutor1.Id).Where(r => r.CountryId == r.Country.Id).FirstOrDefault();
                //HttpContext.Session.SetString("image", student.Profile);
                var state = _context.State.Where(t => t.Id == student.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == student.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == student.TimeZoneId).FirstOrDefault();
                ViewData["studentprofile"] = null;
                //ViewBag.SubjectName = _context.Subjects.Where(c => c.Id == Convert.ToInt32(student.Subject)).Select(c => c.Name).FirstOrDefault();
                //get subject names with comma seperated
                var snameList = student.Subject.Split(',').ToList();

                if (snameList.Count != 0)
                {
                    var snameslist = _context.Subjects.Where(c => snameList.Contains(c.Id.ToString())).Select(c => c.Name).ToList();
                    var SubjectNames = String.Join(", ", snameslist);
                    ViewBag.SubjectName = SubjectNames != null ? SubjectNames : "N/A";

                }
                return View(student);
            }
            else
            {
                var student = _context.Student.Include(r => r.Country).Where(r => r.Id == id).Where(r => r.CountryId == r.Country.Id).FirstOrDefault();

                var state = _context.State.Where(t => t.Id == student.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == student.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == student.TimeZoneId).FirstOrDefault();
                ViewData["studentprofile"] = student;
                // ViewBag.SubjectName = _context.Subjects.Where(c => c.Id == Convert.ToInt32(student.Subject)).Select(c => c.Name).FirstOrDefault();
                //get subject names with comma seperated
                var snameList = student.Subject.Split(',').ToList();

                if (snameList.Count != 0)
                {
                    var snameslist = _context.Subjects.Where(c => snameList.Contains(c.Id.ToString())).Select(c => c.Name).ToList();
                    var SubjectNames = String.Join(", ", snameslist);
                    ViewBag.SubjectName = SubjectNames != null ? SubjectNames : "N/A";

                }
                return View(student);

            }

        }
        public async Task<IActionResult> ProfileEdit(int id)
        {
            //TempData["RoleName"] = "Tutor";
            var user = await GetCurrentUserAsync();
            var userId = user?.Id;
            var tutor = _context.Tutor.Where(t => t.IdentityId == userId).FirstOrDefault();
            //HttpContext.Session.SetString("image", tutor.ProfilePic);
            if (tutor == null)
            {

                ViewData["tutordata"] = null;
                ViewBag.displaySidebar = "NO";
                return View(tutor);
            }
            //else if (tutor.ProfilePic != "")
            //{
            //    tutor.ProfilePic = "data:image/JPG;base64," + tutor.ProfilePic;
            //}

            var country = _context.Country.Where(t => t.Id == tutor.CountryId).FirstOrDefault();
            tutor.Country.Name = country.Name;

            ViewData["tutordata"] = tutor;
            ViewBag.displaySidebar = "YES";
            return View(tutor);
        }

        public async Task <IActionResult> List()
        {
            var user = await GetCurrentUserAsync();
            var userId = user?.Id;


            var student = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
            ViewBag.subjects = student.Subject;
        
          
            var tutors = _context.Tutor.Where(t=>t.IsApproved==true).ToList();
            List<SubjectTypesBySubject> subnamelist = new List<SubjectTypesBySubject>();
            foreach (var item in tutors)
            {
                SubjectTypesBySubject subname = new SubjectTypesBySubject();
                   var snameList = item.SubjectId.Split(',').ToList();
                var snameslist = _context.Subjects.Where(c => snameList.Contains(c.Id.ToString())).Select(c => c.Name).ToList();
                subname.SubjectName = String.Join(", ", snameslist);
                
                subnamelist.Add(subname);
               
            }
            ViewBag.subjectName = subnamelist;
                return View(tutors);
           
        }

        public IActionResult Bookedslots()
        {
            return View();
        }

        public async Task<ActionResult<List<Schedule>>> GetBookedslots(DateTime startdate, DateTime enddate)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();

                var schedule = (from s in _context.Slots
                                join n in _context.Schedule on s.Id equals n.SlotId
                                join stu in _context.Student on n.StudentId equals stu.Id
                                where s.TutorId == slots.Id && n.Date >= startdate && n.Date <= enddate
                                select new Schedule
                                {
                                    StudentId = n.StudentId,
                                    Date = n.Date,
                                    Time = n.Time,
                                    CreatedBy = stu.FirstName + " "+stu.LastName,
                                    SubjectId=n.SubjectId,
                                    SubjectTopicId=n.SubjectTopicId,
                                    Message= n.Message != null ? n.Message : "N/A"
                                }).ToList();

                var id = slots.TimeZoneId;
                var timezone = _context.TimeZones.Where(p => p.Id == id).FirstOrDefault();

                //var time = _context.Times.ToList();
                List<Schedule> timedata = new List<Schedule>();
                foreach (var item in schedule)
                {
                    Schedule objSD = new Schedule();
                    //DateTime localDt = DateTime.Today;
                    DateTime utcTime = Convert.ToDateTime(item.Time).ToUniversalTime();
                    TimeZoneInfo timeInfo = TimeZoneInfo.FindSystemTimeZoneById(timezone.Title.Trim());
                    DateTime estDt = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeInfo);
                    objSD.Time = estDt.ToString("HH:mm tt");
                    objSD.Date = item.Date;
                    objSD.Id = item.Id;
                    objSD.StudentId = item.StudentId;
                    objSD.CreatedBy = item.CreatedBy;
                    
                    objSD.SubjectId = item.SubjectId;
                    objSD.SubjectTopicId = item.SubjectTopicId;
                    objSD.Message = item.Message;
                    timedata.Add(objSD);

                }

                return timedata;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public JsonResult TutorList()
        {
            var tutors = _context.Tutor.Where(c=>c.IsApproved==true).ToList();

            return Json(tutors);
        }

        public IActionResult Schedule()
        {
            //TempData["RoleName"] = "Tutor";
            return View();
        }
       
        public async Task<IActionResult> AddandRemoveSchedule(Slot s)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                s.TutorId = slots.Id;
                var slot = _context.Slots.Where(p => p.TutorId.Equals(s.TutorId) && p.ScheduleDateTime == s.ScheduleDateTime).FirstOrDefault();
                if (slot == null)
                {
                    s.CreatedBy = "test";
                    s.CreatedDate = System.DateTime.Now;
                    s.UpdatedBy = "test1";
                    s.UpdatedDate = System.DateTime.Now;
                    _context.Add(s);
                    _context.SaveChanges();
                    return Json(new { success = true });
                }
                else
                {
                    var slotss = _context.Schedule.Where(p => p.SlotId.Equals(slot.Id)).FirstOrDefault();
                    if (slotss != null)
                    {
                        _context.Schedule.Remove(slotss);
                    }
                    
                    _context.Remove(slot);
                    _context.SaveChanges();
                    return Json(new { success = false });
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task<Slot> GetBookingTutorSlots(DateTime startDateTime,string startTime)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                
                
                var bookingslot = _context.Slots.Where(p => p.TutorId.Equals(slots.Id) && p.ScheduleDateTime == startDateTime && p.Time ==startTime).FirstOrDefault();
                return bookingslot;
               
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ActionResult<List<Time>>> GetTimesBasedonTimezones()
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                if (slots != null) {

                    int id = slots.TimeZoneId;
                    var timezone = _context.TimeZones.Where(p => p.Id == id).FirstOrDefault();

                    var time = _context.Times.ToList();
                    List<Time> timedata = new List<Time>();
                    foreach (var item in time)
                    {
                        Time objSD = new Time();
                        //DateTime localDt = DateTime.Today;
                        DateTime utcTime = Convert.ToDateTime(item.Times).ToUniversalTime();
                        TimeZoneInfo timeInfo = TimeZoneInfo.FindSystemTimeZoneById(timezone.Title.Trim());
                        DateTime estDt = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeInfo);
                        objSD.Title = estDt.ToString("HH:mm tt");
                        objSD.Times = item.Times;
                        objSD.Id = item.Id;
                        timedata.Add(objSD);

                    }

                    return timedata;

                }
                else
                {
                    var slotsstudent = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();


                    var tid = slotsstudent.TimeZoneId;
                    var timezone = _context.TimeZones.Where(p => p.Id == tid).FirstOrDefault();

                    var time = _context.Times.ToList();
                    List<Time> timedata = new List<Time>();
                    foreach (var item in time)
                    {
                        Time objSD = new Time();
                        //DateTime localDt = DateTime.Today;
                        DateTime utcTime = Convert.ToDateTime(item.Times).ToUniversalTime();
                        TimeZoneInfo timeInfo = TimeZoneInfo.FindSystemTimeZoneById(timezone.Title.Trim());
                        DateTime estDt = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeInfo);
                        objSD.Title = estDt.ToString("HH:mm tt");
                        objSD.Times = item.Times;
                        objSD.Id = item.Id;
                        timedata.Add(objSD);

                    }

                    return timedata;

                }
           
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<ActionResult<List<Slot>>> GetDates(DateTime startdate, DateTime enddate)
        {
            try
            {
                
                
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                int id = slots.Id;
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= startdate && p.ScheduleDateTime <= enddate&&p.TutorId==id).ToList();
                return date;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<ActionResult<List<Schedule>>> GetStudentBookedDates(DateTime startdate, DateTime enddate)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                int id = slots.Id;
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= startdate && p.ScheduleDateTime <= enddate && p.TutorId == id).ToList();
                List<Schedule> Slotdata = new List<Schedule>();
                foreach (var item in date)
                {
                    Schedule objSD = new Schedule();
                    objSD = _context.Schedule.Where(p => p.Date >= startdate && p.Date <= enddate && p.SlotId == item.Id).FirstOrDefault();
                    if (objSD != null)
                    {
                        Slotdata.Add(objSD);
                    }
                    
                }

                return Slotdata;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<Subject> GetSubjectsBasedonTutorId(int id)
        {
            var sublist = _context.Tutor.Where(t => t.Id == id).FirstOrDefault();
            var subIdlist = sublist.SubjectId.Split(',').ToList();
            return _context.Subjects.Where(c=>subIdlist.Contains(c.Id.ToString())).ToList();


        }
       
        //get Tutor subjects 
        public async Task<ActionResult<List<Subject>>> GetTutorSubjects()
        {
            var user = await GetCurrentUserAsync();
            var userId = user?.Id;
            var objTutor = _context.Tutor.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();

            var tutorSubjectList = objTutor.SubjectId.Split(',').ToList();

            List<Subject> SubList = new List<Subject>();
            foreach (var sid in tutorSubjectList)
            {
                Subject objSubject = new Subject();
                var tutorSubjects = _context.Subjects.Where(c => c.Id.ToString() == sid).FirstOrDefault();
                objSubject.Id = tutorSubjects.Id;
                objSubject.Name = tutorSubjects.Name;
                SubList.Add(objSubject);
            }
            return SubList;
        }

        //Admin Dash board links
        public List<Tutor> GetTutors(string status)
        {
            if (status == "All Tutors")
            {
                return _context.Tutor.ToList();
            }
            else if (status == "Active Tutors")
            {
                return _context.Tutor.Where(c => c.IsApproved == true).ToList();
            }
            else if (status == "In-Active Tutors")
            {
                return _context.Tutor.Where(c => c.IsApproved == false).ToList();
            }
            else
            {
                List<Tutor> obj = new List<Tutor>();
                return obj;
            }
        }
    }


    

}

