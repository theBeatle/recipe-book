using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Models;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecipeFeedBacksController : ControllerBase
    {

        private readonly UserManager<User> _userManager;
        private readonly DatabaseContext _context;
        public RecipeFeedBacksController(UserManager<User> userManager, DatabaseContext context)
        {
            _userManager = userManager;
            _context = context;
        }
        // GET: api/RecipeFeedBacks
        [HttpGet("{RecipeId}", Name = "GetComments")]
        public IEnumerable<FeedBackRecipeModel> GetComments(int RecipeId)
        {
            var comments = this._context.Comments.Include("recipe").Include("user").Where(x => x.recipe.Id == RecipeId).ToList();
            var result = new List<FeedBackRecipeModel>();
            foreach (var el in comments)
            {
                result.Add(new FeedBackRecipeModel()
                {
                    Ava = "None",
                    FirstName = el.user.FirstName,
                    LastName = el.user.LastName,
                    Text = el.Text,
                    Time = el.Time
                });
            }
            return result;
        }
        [HttpPost]
        public IActionResult PostComment([FromBody] FeedBacksRecipeViewModel model)
        {
            if (IsModelValid(model))
            {
                this._context.Comments.Add(new Comment()
                {
                    recipe = _context.Recipes.FirstOrDefault(x => x.Id == model.rid),
                    Text = model.Text,
                    user = _context.Users.FirstOrDefault(x => x.Id == model.uid),
                    Time = DateTime.Now,
                });
                this._context.SaveChanges();
                return Ok("OK");
            }
            else
            {
                return BadRequest("Invalid request!");
            }
        }

        private bool IsModelValid(FeedBacksRecipeViewModel model)
        {
            var recipe = this._context.Recipes.FirstOrDefault(x => x.Id == model.rid);
            var user = this._context.Users.FirstOrDefault(x => x.Id == model.uid);
            if (recipe != null && user !=null && !string.IsNullOrEmpty(model.Text))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
