using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Models;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompassTutor.Controllers
{
    public class StudentController : Controller
    {
        private readonly Data.ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public StudentController(Data.ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public IActionResult Index(string text)
        {
            ViewBag.Status = text;
           // var StudentList = _context.Student.ToList();
            return View();
        }
        public IActionResult Schedulelessons()
        {
            return View();

        }

        public IActionResult Schedule(int id)
        {
            // TempData["RoleName"] = "Student";
            ViewBag.tutorid = id;
            var state = _context.Tutor.Where(t => t.Id == id).FirstOrDefault();
           // var tutorDD = _context.Tutor.ToList();
            //ViewBag.TutorsList = tutorDD.Select(i => new { Id = i.Id, Name = i.FirstName + " " + i.LastName });
             ViewBag.tutorname = state.FirstName + " " + state.LastName;
            ViewBag.subject = state.SubjectId;
              ViewBag.subjectId = state.SubjectId;
            var subIdlist = state.SubjectId.Split(',').ToList();

            //List<Subject> sublist = new List<Subject>();
            var ObjSubject = _context.Subjects.Where(c => subIdlist.Contains(c.Id.ToString())).ToList();
            ViewBag.subdropdownlist = ObjSubject;
            return View();

        }

        public async Task<IActionResult> ProfileView(int id)
        {
            //id = 32;
            if (id == 0)
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var tutor1 = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
                var student = _context.Student.Include(r => r.Country).Where(r => r.Id == tutor1.Id).Where(r => r.CountryId == r.Country.Id).FirstOrDefault();

                var state = _context.State.Where(t => t.Id == student.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == student.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == student.TimeZoneId).FirstOrDefault();
                return View(student);
            }
            else
            {
                var student = _context.Student.Include(r => r.Country).Where(r => r.Id == id).Where(r => r.CountryId == r.Country.Id).FirstOrDefault();

                var state = _context.State.Where(t => t.Id == student.StateId).FirstOrDefault();
                var city = _context.City.Where(t => t.Id == student.CityId).FirstOrDefault();
                var timeZone = _context.TimeZones.Where(t => t.Id == student.TimeZoneId).FirstOrDefault();
                return View(student);

            }

        }
      

        public IActionResult Completedlessons()
        {
            //try
            //{
            //    var user = await GetCurrentUserAsync();
            //    var userId = user?.Id;
            //    var slots = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();

            //    var schedule = (from s in _context.Slots
            //                    join n in _context.Schedule on s.Id equals n.SlotId
            //                    join stu in _context.Tutor on s.TutorId equals stu.Id
            //                    where n.StudentId == slots.Id && n.Date <= DateTime.Now && n.Date >= DateTime.Now
            //                    select new Schedule
            //                    {
            //                        StudentId = n.StudentId,
            //                        Date = n.Date,
            //                        Time = n.Time,
            //                        CreatedBy = stu.FirstName + " " + stu.LastName,
            //                    }).ToList();
            //    //return schedule;
            //    return View(schedule);
            //}
            //catch (Exception ex)
            //{
            //    throw ex;
            //}
            return View();
            
        }
        public async Task<ActionResult<List<Schedule>>> GetCompletedlessons(DateTime startdate, DateTime enddate)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();

                var schedule = (from s in _context.Slots
                                join n in _context.Schedule on s.Id equals n.SlotId
                                join stu in _context.Tutor on s.TutorId equals stu.Id
                                where n.StudentId == slots.Id && n.Date >= startdate && n.Date <= enddate
                                select new Schedule
                                {
                                    StudentId = n.StudentId,
                                    Date = n.Date,
                                    Time = n.Time,
                                    CreatedBy = stu.FirstName + " " + stu.LastName,
                                    UpdatedBy=n.SubjectId,
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
                    objSD.UpdatedBy = item.UpdatedBy;
                    timedata.Add(objSD);

                }








                return timedata;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<IActionResult> ProfileEdit(int id)
        {
            // TempData["RoleName"] = "Student";
            var user = await GetCurrentUserAsync();
            var userId = user?.Id;


            var student = _context.Student.Where(t => t.IdentityId == userId).FirstOrDefault();
            if (student == null)
            {
                ViewData["studentdata"] = null;
                ViewBag.displaySidebar = "NO";
                return View(student);

            }
            //byte[] decodedBytes = Convert.FromBase64String(student.Profile);
            //student.Profile = "data:image/jpeg;base64," + System.Text.Encoding.UTF8.GetString(decodedBytes);
            //student.Profile = System.Text.Encoding.Unicode.GetString(decodedBytes);
            ViewData["studentdata"] = student;
            ViewBag.displaySidebar = "YES";
            //var sname = _context.Subjects.Where(c => c.Id == Convert.ToInt32(student.Subject)).Select(c => c.Name).FirstOrDefault();
            //ViewBag.SubjectName = sname;
            return View(student);
        }


        public async Task<IActionResult> AddandRemoveSchedule(Schedule s)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                s.StudentId = slots.Id;
                var schedule = _context.Slots.Where(p => p.Id == s.SlotId).FirstOrDefault();
                var studentslotvalidation = _context.Schedule.Where(p => p.StudentId.Equals(s.StudentId) && p.Date == schedule.ScheduleDateTime && schedule.Id!=p.SlotId).FirstOrDefault();
                if (studentslotvalidation == null)
                {
                    var slot = _context.Schedule.Where(p => p.StudentId.Equals(s.StudentId) && p.Date == s.Date).FirstOrDefault();
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
                        _context.Remove(slot);
                        _context.SaveChanges();
                        return Json(new { success = false });
                    }
                }
                else
                {
                    return Json(new { success = studentslotvalidation });
                }
            

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }




     



        public async Task<ActionResult<List<Schedule>>> GetDatesinSchedule(int id,DateTime startdate, DateTime enddate,string subject,string topic)
        {
            try
            {
                //List<int> slotid = new List<int>();
          
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                //var tutorlist = _context.Slots.Where(p => p.TutorId.Equals(id)).ToList();
                //var schedulelist = _context.Schedule.ToList();
                int idd = slots.Id;
                //foreach (var item in tutorlist)
                //{
                //    foreach (var item1 in schedulelist)
                //    {
                //        if (item.Id == item1.SlotId && item.ScheduleDateTime == item1.Date && item.Time == item1.Time)
                //        {
                //            slotid.Add(item.Id);
                //        }
                //    }

                //}
                DateTime tim = DateTime.Now;
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= tim && p.ScheduleDateTime <= enddate && p.TutorId == id).ToList();
                var schedule = (from s in date
                                join n in _context.Schedule on s.Id equals n.SlotId where idd==n.StudentId
                                where n.SubjectId==subject&& n.SubjectTopicId==topic
                                //join stu in _context.Tutor on n.TutorId equals stu.Id
                               // join sub in _context.Subjects on stu.SubjectId equals sub.Id
                                //where  n.Date >= startdate && n.Date <= enddate
                                select new Schedule
                                {
                                    //StudentId = n.StudentId,
                                    Date = n.Date,
                                    Time = n.Time,
                                    SlotId=n.SlotId,
                                   // CreatedBy = stu.FirstName + " " + stu.LastName,
                                   // UpdatedBy = sub.Name,
                                }).ToList();
                //var dates = _context.Schedule.Where(p => p.Date >= startdate && p.Date <= enddate && p.StudentId == idd/* && !slotid.Contains(p.SlotId)*/).ToList();

                return schedule;
                //List<Slot> dates = new List<Slot>();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<ActionResult<List<Schedule>>> GetSchedulelessonsDates(DateTime startdate, DateTime enddate)
        {
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                var slots = _context.Student.Where(p => p.IdentityId.Equals(userId)).FirstOrDefault();
                int id = slots.Id;
                var date = _context.Schedule.Where(p => p.Date >= startdate && p.Date <= enddate && p.StudentId == id).ToList();
                var schedule = (from s in date
                                join n in _context.Slots on s.SlotId equals n.Id
                                join stu in _context.Tutor on n.TutorId equals stu.Id
                              // join sub in _context.Subjects on stu.SubjectId equals sub.Id
                                //where  n.Date >= startdate && n.Date <= enddate
                                select new Schedule
                                {
                                    //StudentId = n.StudentId,
                                    Date = s.Date,
                                    Time = s.Time,
                                    CreatedBy = stu.FirstName + " " + stu.LastName,
                                    UpdatedBy=s.SubjectId,
                                }).ToList();
                return schedule;
                //return date;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Schedule GetSubjectinschedule(int Slotid)
        {
            //var tutor1 = _context.Schedule.Where(t => t.SlotId == Slotid).FirstOrDefault();
            var tutor1 = (from s in _context.Schedule
                         join slot in _context.Slots
                              on s.SlotId equals slot.Id where s.SlotId == Slotid
                         select new Schedule
                         {
                             SubjectId=s.SubjectId,
                             Message=s.Message,
                             UpdatedBy=slot.Notes,
                             SubjectTopicId=s.SubjectTopicId,
                         }).FirstOrDefault();
            return tutor1;
        }


        public List<Slot> GetDates(int id,DateTime startdate, DateTime enddate,string subject,string subjecttype)
        {
            try
            {
                List<int> slotid = new List<int>();
                DateTime tim = DateTime.Now;
                var date = _context.Slots.Where(p => p.ScheduleDateTime >= tim && p.ScheduleDateTime <= enddate&&p.TutorId==id).ToList();
                var schedulelist = _context.Schedule.ToList();
                foreach (var item in date)
                {
                    foreach (var item1 in schedulelist)
                    {
                        if (item.Id == item1.SlotId && item.ScheduleDateTime == item1.Date && item.Time == item1.Time)
                        {
                            slotid.Add(item.Id);
                        }
                    }

                }
                var dates = _context.Slots.Where(p => p.ScheduleDateTime >= startdate && p.ScheduleDateTime <= enddate && p.TutorId == id && !slotid.Contains(p.Id)&&p.SubjectId==subject&&p.SubjectTopicId==subjecttype).ToList();

                var datedate = (from s in _context.Slots
                                join sub in _context.Subjects on s.SubjectId equals sub.Id.ToString()
                                join subtopic in _context.SubjectTypes on s.SubjectTopicId equals subtopic.Id.ToString()
                                where s.ScheduleDateTime >= tim  && s.ScheduleDateTime <= enddate && s.TutorId == id && !slotid.Contains(s.Id)
                                && s.SubjectId == subject && s.SubjectTopicId == subjecttype
                                select new Slot
                                {
                                    Id=s.Id,
                                    TutorId=s.TutorId,
                                    ScheduleDateTime = s.ScheduleDateTime,
                                    Time = s.Time,
                                    SubjectId = sub.Name,
                                    SubjectTopicId=subtopic.Name,
                                    Notes=s.Notes,
                                }).ToList();
                return datedate;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Admin Dash board links
        public List<Student> GetStudents(string status)
        {
            if(status== "All Students")
            {
                return _context.Student.ToList();
            }
            else if (status == "Active Students")
            {
                return _context.Student.Where(c=>c.IsApproved==true).ToList();
            }
            else if (status == "In-Active Students")
            {
                return _context.Student.Where(c => c.IsApproved == false).ToList();
            }
            else
            {
                List<Student> obj = new List<Student>();
                return obj;
            }
        }
    }
}