using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;
        public RolesController(RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
        {
            this._roleManager = roleManager;
            this._userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> CreateRole(string RoleName)
        {
            IdentityResult result = await this._roleManager.CreateAsync(new IdentityRole(RoleName));
            if (result.Succeeded)
                return Ok("Role created");
            else
                return BadRequest(result.Errors);
        }
        [HttpGet]
        public async Task<IActionResult> IsUserInRole(string uid, string RoleName)
        {
            var user = await _userManager.FindByIdAsync(uid);
            if (user != null)
            {
                var res = await _userManager.IsInRoleAsync(user, RoleName);
                return Ok(res);
            }
            return BadRequest("User with uid: " + uid + " not found!");
        }
        [HttpGet]
        public async Task<IActionResult> SetUserRole(string uid, string roleName)
        {
            var user = await _userManager.FindByIdAsync(uid);
            if (user != null)
            {
                IdentityResult result = await this._userManager.AddToRoleAsync(user, roleName);

                if (result.Succeeded)
                {
                    return Ok("Ok");
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return  BadRequest("User with uid: " + uid + " not found!");
        }
        [HttpGet]
        public async Task<IActionResult> RemoveUserRole(string uid, string roleName)
        {
            var user = await _userManager.FindByIdAsync(uid);
            if (user != null)
            {
                IdentityResult result = await this._userManager.RemoveFromRoleAsync(user, roleName);

                if (result.Succeeded)
                {
                    return Ok("Ok");
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return BadRequest("User with uid: " + uid + " not found!");
        }
        [HttpGet]
        public async Task<IEnumerable<string>> GetRolesByUID(string uid)
        {
            var user = await _userManager.FindByIdAsync(uid);
            if (user != null)
            {
                var roles = await _userManager.GetRolesAsync(user);
                return roles;
            }
            return null;
        }
        [HttpGet]
        public IEnumerable<IdentityRole> GetRoles()
        {
            return _roleManager.Roles.ToList();
        }
    }
}