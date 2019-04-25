using AutoMapper;
using BackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfirmRecoveryController : ControllerBase
    {
        private readonly DatabaseContext _appDbContext;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly ILogger _logger;
        public ConfirmRecoveryController(UserManager<User> userManager, ILogger<AuthController> logger, IMapper mapper, DatabaseContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
            _logger = logger;
        }

        // POST api/auth/confirm-recovery
        [HttpGet("confirm-recovery")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            //Check if userId and token is exists
            if (userId == null || code == null)
            {
                return Content("Invalid token!");
            }
            
            //Get user by userId
            var user = await _userManager.FindByIdAsync(userId);
            
            //Check token and change password
            var result = await _userManager.ResetPasswordAsync(user, code, "12345678");
           
            //Check if password chenged
            if (result.Succeeded)
            {
                return Content("New password was sent to your Email!");
            }
            return Content("Invalid token!");
        }
    }
}
