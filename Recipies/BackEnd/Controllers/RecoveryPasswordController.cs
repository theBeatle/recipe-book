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
using System.Net.Mail;
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

                //Send recovery email
                sendEmail(user.Email, resetLink);

                return Content("Reset link was sent!");
            }

            return Content("Error! Check your Email.");
        }

        //Send recovery email
        private void sendEmail(String to, String resetLink)
        {
            MailMessage mm = new MailMessage();
            SmtpClient smtp = new SmtpClient();

            mm.From = new MailAddress("recipiesmail2@gmail.com", "recipiesmail2@gmail.com", System.Text.Encoding.UTF8);
            mm.To.Add(new MailAddress(to, to, System.Text.Encoding.UTF8));
            mm.Subject = "New Password";
            mm.Body = "Your reset link: " + resetLink;
            mm.IsBodyHtml = true;
            smtp.Host = "smtp.gmail.com";
            smtp.EnableSsl = true;
            System.Net.NetworkCredential NetworkCred = new System.Net.NetworkCredential();
            NetworkCred.UserName = "recipiesmail2@gmail.com";
            NetworkCred.Password = "P@4kf33re";
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = NetworkCred;
            smtp.Port = 587;
            smtp.Send(mm);
        }
    }
}
