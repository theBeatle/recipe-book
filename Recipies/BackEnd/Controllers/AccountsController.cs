using System.Threading.Tasks;

using AutoMapper;

using BackEnd.Helpers;
using BackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BackEnd.ViewModels;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {

        private readonly DatabaseContext _appDbContext;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;




        public AccountsController(UserManager<User> userManager, IMapper mapper, DatabaseContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<User>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            await _appDbContext.Users.AddAsync(new User { IdentityId = userIdentity.Id });
            await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}