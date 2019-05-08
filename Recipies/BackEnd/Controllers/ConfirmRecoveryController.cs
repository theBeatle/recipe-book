using AutoMapper;
using BackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
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

            //Generate new password
            String newPass = RandomString(10);

            //Check token and change password
            var result = await _userManager.ResetPasswordAsync(user, code, newPass);
           
            //Check if password chenged
            if (result.Succeeded)
            {
                //Send new password
                sendEmail(user.Email, newPass);

                return Content("New password was sent to your Email!");
            }
            return Content("Invalid token!");
        }

        // Generate a random string with a given size  
        public string RandomString(int size)
        {
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch;
            for (int i = 0; i < size; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
                builder.Append(ch);
            }
            return builder.ToString();
        }

        //Send new password
        public void sendEmail(String to, String newPassword)
        {
            MailMessage mm = new MailMessage();
            SmtpClient smtp = new SmtpClient();

            mm.From = new MailAddress("From", "recipiesmail2@gmail.com", System.Text.Encoding.UTF8);
            mm.To.Add(new MailAddress(to));
            mm.Subject = "New Password";
            mm.Body = "Your new password: " + newPassword;
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
