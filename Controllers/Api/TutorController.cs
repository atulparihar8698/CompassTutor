using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CompassTutor.Data;
using CompassTutor.Models;
using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace CompassTutor.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class TutorController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ISession session;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        public TutorController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _userManager = userManager;
            session = httpContextAccessor.HttpContext.Session;
        }

        public IEnumerable<Tutor> GetTutor()
        {
            return _context.Tutor.ToList();
        }

        [HttpPost]
        public async Task<IActionResult> PostTutor([FromBody] Tutor Tutor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = await GetCurrentUserAsync();
                var userId = user?.Id;
                Tutor.IdentityId = userId;
                session.SetString("image", Tutor.ProfilePic);
                Tutor.IsApproved = false;
                _context.Tutor.Add(Tutor);
                await _context.SaveChangesAsync();
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                return Ok(0);
            }
            return Ok(Tutor);
            //return CreatedAtAction("GetTutor", new { id = Tutor.Id }, Tutor);
        }

        // PUT: api/Tutor/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTutor([FromRoute] int id, [FromBody] Tutor Tutor)
        {
            

            if (!ModelState.IsValid)
            {

                return BadRequest(ModelState);
            }

            if (id != Tutor.Id)
            {
                return BadRequest();
            }
            
            var user = await GetCurrentUserAsync();
            var userId = user?.Id;
            
            Tutor.IdentityId = userId;
            if (Tutor.FirstName == null)
            {
                Tutor st = _context.Tutor.Where(p => p.Id == id).FirstOrDefault();
                st.IsApproved = Tutor.IsApproved;
                _context.Entry(st).State = EntityState.Modified;

            }
            else
            {
                session.SetString("image", Tutor.ProfilePic);
                //Tutor st = _context.Tutor.Where(p => p.Id == id).FirstOrDefault();
                //Tutor.IsApproved = st.IsApproved;
                _context.Entry(Tutor).State = EntityState.Modified;

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
            return Ok(Tutor);
            //return CreatedAtAction("GetTutor", new { id = Tutor.Id }, Tutor);

        }
    }
}