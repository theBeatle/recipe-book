using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BackEnd.Helpers;
using BackEnd.Models;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDataEditController : ControllerBase
    {
        private readonly DatabaseContext _appDbContext;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly ILogger _logger;
        public UserDataEditController(UserManager<User> userManager, ILogger<AuthController> logger, IMapper mapper, DatabaseContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
            _logger = logger;
        }

        [HttpPut("update")]
        public async Task<IActionResult> EditData([FromBody]UserDataEditViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user =await _userManager.FindByNameAsync(User.Identity.Name);

            string HashedPassword = _userManager.PasswordHasher.HashPassword(user, model.Password);

            user.PasswordHash = HashedPassword;

            user.Email = model.Email;
            user.NormalizedEmail = model.Email;
            user.UserName = model.Email;

            user.FirstName = model.FirstName;

            user.LastName = model.LastName;

            user.NickName = model.NickName;

            user.Country = model.Country;

            await _userManager.UpdateAsync(user);

            // await _userManager.UpdateAsync(  

            //a/wait _userManager.UpdateAsync();

            //var password = Encoding.ASCII.GetBytes(model.Password);
            //var sha1 = new SHA1CryptoServiceProvider();
            //var HashPassword = sha1.ComputeHash(password);

            //User userIdentity = new Models.User();
            //userIdentity.Country = model.Country;
            //userIdentity.Email = model.Email;
            //userIdentity.FirstName = model.FirstName;
            //userIdentity.LastName = model.LastName;
            //userIdentity.NickName = model.NickName;
            //userIdentity.PasswordHash = HashPassword.ToString();

            ////var result = await _userManager.CreateAsync(userIdentity, model.Password);
            ////_logger.LogInformation("[SIGN-UP] Created new account");

            ////if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            //_appDbContext.Entry(await _userManager.GetUserAsync(HttpContext.User)).State = EntityState.Modified;
            //_appDbContext.Users.Update(userIdentity);
            //await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Data Edited");
        }
    }
}