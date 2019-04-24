using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext _appDbContext;
        
        private readonly UserManager<User> _userManager;
        public UsersController(DatabaseContext databaseContext, UserManager<User> userManager)
        {
            this._appDbContext = databaseContext;
            this._userManager = userManager;
        }
        [HttpGet]
        public IEnumerable<User> GetUsers() {
            return _appDbContext.Users.ToList();
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "GetUserById")]
        [Authorize]
        public IActionResult GetUserById(string id)
        {
            var user = _appDbContext.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                return new OkObjectResult(user);
            }
            else
            {
                return BadRequest("User not found");
            }
        }
    }
}
