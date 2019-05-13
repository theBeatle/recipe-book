using System.Threading.Tasks;
using AutoMapper;
using BackEnd.Helpers;
using BackEnd.Models;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly DatabaseContext _appDbContext;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly ILogger _logger;
        public RegistrationController(UserManager<User> userManager, ILogger<AuthController> logger, IMapper mapper, DatabaseContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
            _logger = logger;
        }

        // POST api/auth/registration
        [HttpPost("registration")]
        public async Task<IActionResult> Reg([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<User>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);
            _logger.LogInformation("[SIGN-UP] Created new account");

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            //  Fixed user repetition!!!
            // await _appDbContext.Users.AddAsync(new User { IdentityId = userIdentity.Id });
            // await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}