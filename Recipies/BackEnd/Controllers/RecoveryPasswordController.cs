using BackEnd.Helpers;
using BackEnd.Models;
using BackEnd.Services.JWT.Auth;
using BackEnd.Services.JWT.Models;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecoveryPasswordController : ControllerBase
    {


        private readonly UserManager<User> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ILogger _logger;
        public RecoveryPasswordController(UserManager<User> userManager, ILogger<AuthController> logger, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
            _logger = logger;
        }

        // POST api/auth/recovery
        [HttpPost("recovery")]
        public async Task<IActionResult> Recovery(String email)
        {
            if (ModelState.IsValid)
            {
                //Get user by Email
                var user = await _userManager.FindByNameAsync(email);

                //Check if user exists
                if (user == null)
                {
                    return Content("Error! Check your Email.");
                }

                //Generate token
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);

                //Generate reset link
                var resetLink = "https://localhost:44385/api/ConfirmRecovery/confirm-recovery?userId=" + user.Id + "&code=" + HttpUtility.UrlEncode(code);

                return Content(resetLink);
            }

            return Content("Error! Check your Email.");
        }

    }
}
