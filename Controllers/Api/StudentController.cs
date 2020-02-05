using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompassTutor.Models;
using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompassTutor.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly Data.ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ISession session;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public StudentController(Data.ApplicationDbContext context, UserManager<ApplicationUser> userManager, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _userManager = userManager;
            session = httpContextAccessor.HttpContext.Session;
        }
        

        // GET: api/Student
        [HttpGet]
        public List<Student> GetStudent()
        {
            return _context.Student.ToList();
        }


        // GET: api/Student/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Student = await _context.Student.FindAsync(id);

            if (Student == null)
            {
                return NotFound();
            }

            return Ok(Student);
        }

        // POST: api/Student
        [HttpPost]
        public async Task<IActionResult> PostStudent([FromBody] Student Student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;  
                Student.IdentityId = userId;
                session.SetString("image", Student.Profile);
                Student.IsApproved = false;
                //if (Student.CityId == null && Student.City != null)
                //{
                //    City objNewCity = new City();
                //    objNewCity.Name = Student.City.Name;
                //    objNewCity.StateId = Student.City.StateId;
                //    _context.City.Add(objNewCity);
                //    _context.SaveChanges();
                //    var cityList = _context.City.OrderByDescending(c => c.Id).Take(1).FirstOrDefault();
                //    Student.CityId = cityList.Id;

                //}
                _context.Student.Add(Student);
                await _context.SaveChangesAsync();
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                return Ok(0);
            }
            return Ok(Student);
            //return CreatedAtAction("GetStudent", new { id = Student.Id }, Student);
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent([FromRoute] int id, [FromBody] Student Student)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Student.Id)
            {
                return BadRequest();
            }

            var user = await GetCurrentUserAsync();
            var userId = user?.Id;
            Student.IdentityId = userId;
            if (Student.FirstName == null)
            {
                Student st = _context.Student.Where(p => p.Id == id).FirstOrDefault();

                st.IsApproved = Student.IsApproved;

                _context.Entry(st).State = EntityState.Modified;
            }

            else

            {
                //Student st = _context.Student.Where(p => p.Id == id).FirstOrDefault();

                //Student.IsApproved = st.IsApproved;
                session.SetString("image", Student.Profile);

                //create new city 
                //if (Student.CityId == null && Student.City != null)
                //{
                //    City objNewCity = new City();
                //    objNewCity.Name = Student.City.Name;
                //    objNewCity.StateId = Student.City.StateId;
                //    _context.City.Add(objNewCity);
                //    _context.SaveChanges();
                //    var cityList = _context.City.OrderByDescending(c => c.Id).Take(1).FirstOrDefault();
                //    Student.CityId = cityList.Id;

                //}
                _context.Entry(Student).State = EntityState.Modified;

            }


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Ok(0);
            }
            return Ok(Student);
            // return CreatedAtAction("GetStudent", new { id = Student.Id }, Student);
        }



        // DELETE: api/Student/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] int id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var Student = await _context.Student.FindAsync(id);
                if (Student == null)
                {
                    return NotFound();
                }

                _context.Student.Remove(Student);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return Ok(0);
            }
            return Ok(1);
        }


        private bool Student(int id)
        {
            return _context.Student.Any(e => e.Id == id);
        }
    }
}


