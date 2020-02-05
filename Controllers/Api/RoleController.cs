using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;

namespace CallOut.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        public RoleManager<IdentityRole> RoleManager;
        IdentityResult roleResult;
        public RoleController(IServiceProvider serviceProvider)
        {
            RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        }
        // GET: api/Role
        [HttpGet]
        public async Task<IEnumerable<IdentityRole>> GetRoles()
        {
            return await RoleManager.Roles.ToListAsync(); 
        }
        // POST: api/Role
        [HttpPost]
        public async Task<IActionResult> PostRole([FromBody] IdentityRole role)
        {
            //creating the roles and seeding them to the database
            var roleExist = await RoleManager.RoleExistsAsync(role.ToString());
            if (!roleExist)
            {
                roleResult = await RoleManager.CreateAsync(new IdentityRole(role.ToString()));
            }
            return CreatedAtAction("GetRoles", new { id = role.Id }, roleResult);
        }
        //put : api/Role
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRole([FromRoute] string id, [FromBody] IdentityRole role)
        {
            roleResult = await RoleManager.UpdateAsync(role);
            return NoContent();
        }

        // DELETE: api/Role
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole([FromRoute] string id, [FromBody] IdentityRole role)
        {
            roleResult = await RoleManager.DeleteAsync(role);
            return NoContent();
        }

    }
}