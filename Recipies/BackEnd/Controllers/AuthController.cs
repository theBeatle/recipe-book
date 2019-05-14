﻿using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using BackEnd.Helpers;
using BackEnd.Models;
using BackEnd.Services.JWT.Auth;
using BackEnd.Services.JWT.Helpers;
using BackEnd.Services.JWT.Models;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Http.Features.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       
      
        private UserManager<User> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ILogger _logger;
        public AuthController(UserManager<User> userManager, ILogger<AuthController> logger, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
            _logger = logger;

        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity = await GetClaimsIdentity(credentials.Email, credentials.Password);
            if (identity == null)
            {
                return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
            }

            var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, credentials.Email, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
            //new Claim(ClaimTypes.Name, credentials.Email);
            //User.Identity.Name = credentials.Email;
            //await _userManager.SetEmailAsync(HttpContext.User.Claims, credentials);
            //var claims = new List<Claim>
            //{
            //    
            //};
            //identity.. = claims;
            //await HttpContext.Authentication.SignInAsync(credentials.Email, this.User);
            //System.Security.Claims.ClaimsPrincipal currentUser = this.User;
            //currentUser.AddIdentity(new ClaimsIdentity(ClaimTypes.));
            //List<User> us = await _userManager.GetUsersForClaimAsync();
            //await _userManager.us(new Claim(ClaimTypes.Name, credentials.Email));
            //ClaimsIdentity.DefaultNameClaimType.
            //identity.AddClaim(new Claim(ClaimTypes.Name, credentials.Email));

            return new OkObjectResult(jwt);
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return await Task.FromResult<ClaimsIdentity>(null);

            // get the user to verifty
            var userToVerify = await _userManager.FindByNameAsync(userName);

            if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

            // check the credentials
            if (await _userManager.CheckPasswordAsync(userToVerify, password))
            {
                return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
            }
            
            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }
    }
}