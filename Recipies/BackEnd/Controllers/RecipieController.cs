using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.ViewModels;
using BackEnd.Services;
using System.Collections.Generic;
using AutoMapper;
using System.Linq;
using BackEnd.ViewModels.RecipeViewModels;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Net.Http.Headers;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipieController : ControllerBase
    {

        private readonly RecipeService _recipeService;

        private readonly IMapper _mapper;
        private readonly DatabaseContext _appDbContext;
        public RecipieController(RecipeService recipeService,DatabaseContext appDbContext, IMapper mapper)
        {
            this._appDbContext = appDbContext;
            this._mapper = mapper;
            _recipeService = recipeService;
        }

        [HttpPost]
        [Route("CreateRecipe")]
        public IActionResult CreateRecipe([FromBody] CreateRecipeViewModel model )
        {
            if (IsModelValid(model))
            {
                this._appDbContext.Recipes.Add(new Recipe()
                {
                    Category = this._appDbContext.Categories.FirstOrDefault(x => x.Id.ToString() == model.category),
                    Country = this._appDbContext.Countries.FirstOrDefault(x => x.Id.ToString() == model.country),
                    User = this._appDbContext.Users.FirstOrDefault(x => x.Id == model.uid),
                    Description = model.Description,
                    Topic = model.Topic,
                    CreationDate = DateTime.Now,
                    CookingProcess = model.CookingProcess,
                });
                this._appDbContext.SaveChanges();
                return Ok("Created!");
            }
            else
            {
                return BadRequest("INVALID!");
            }
        }

        [HttpGet]
        [Route("getCategories")]
        public ICollection<Category> getCategories()
        {
            return _appDbContext.Categories.ToList();
        }

        [HttpGet]
        [Route("getCountries")]
        public ICollection<Country> getCountries()
        {
            return _appDbContext.Countries.ToList();
        }

        [HttpGet]
        [Route("all")]
        public async Task<RecipeViewModel> Index(int? category, int? country, string name, int page = 1,
            SortState sortOrder = SortState.TopicAsc)
        {
            return await _recipeService.GetRecipe(category, country, name, page, sortOrder);
        }


        [HttpPost("UpdateRecipeViewsCounter")]
        public IActionResult UpdateRecipeViewsCounter([FromBody]RecipeViewsCounterModel model)
        {

            User _user = _appDbContext.Users.First(u => u.Id == model.UserId);
            
            if (_user.LastVisit != DateTime.Today)
            {
                Recipe recipe = _appDbContext.Recipes.First(r => r.Id == model.RecipeId);
                if (recipe != null)
                {
                    
                    recipe.ViewsCounter +=1;
                    _user.LastVisit = DateTime.Today;
                    _appDbContext.Entry(_user).State = EntityState.Modified;
                    _appDbContext.Entry(recipe).State = EntityState.Modified;
                    _appDbContext.SaveChanges();
                    

                }
            }

            return Ok("updated");

            
           
        }



   

        [HttpPost("UpdateRecipeRating")]
        public IActionResult UpdateRecipeRating([FromBody] RatingRecipeViewModel model)
        {

            int RecipeId = model.RecipeId;

            if(_appDbContext.RecipeRatings.Count(r=>r.Recipe == _appDbContext.Recipes.First(x=>x.Id==RecipeId)&&r.User.Id==model.UserId)==0)
            {
                Recipe recipe = _appDbContext.Recipes.First(r => r.Id == RecipeId);
                if (recipe != null)
                {
                    _appDbContext.RecipeRatings.Add(new RecipeRating { Recipe = recipe, Star = model.CountStar, User = _appDbContext.Users.First(u => u.Id == model.UserId) });
                    _appDbContext.SaveChanges();
                    recipe.Rating = Math.Round((double)(_appDbContext.RecipeRatings.Count(r => r.Star == 5 && r.Recipe.Id == RecipeId) * 5 + _appDbContext.RecipeRatings.Count(r => r.Star == 4 && r.Recipe.Id == RecipeId) * 4 + _appDbContext.RecipeRatings.Count(r => r.Star == 3 && r.Recipe.Id == RecipeId) * 3 + _appDbContext.RecipeRatings.Count(r => r.Star == 2 && r.Recipe.Id == RecipeId) * 2 + _appDbContext.RecipeRatings.Count(r => r.Star == 1 && r.Recipe.Id == RecipeId) * 1) / _appDbContext.RecipeRatings.Count(r => r.Recipe.Id == RecipeId));
                    _appDbContext.Entry(recipe).State = EntityState.Modified;
                    _appDbContext.SaveChanges();
                    return Ok("Raiting updated");
                }
            }
               
            return BadRequest("Not updated");
        }



        [HttpPost]
        [Route("EditRecipe")]
        public IActionResult EditRecipe([FromBody] EditRecipeViewModel model)
        {
            if (this._recipeService.EditRecipe(model))
            { 
                return Ok("Created!");
            }
            else
            {
                return BadRequest("INVALID!");
            }
        }
       

        [HttpGet]
        [Route("getRecipeById")]
        public RecipeListViewModel GetRecipeById(int RecipeId)
        {
            var el = this._appDbContext.Recipes
                                       .Include(a => a.Country)
                                       .Include(a => a.Category)
                                       .Include(a => a.Gallery)
                                       .Include(a => a.User)
                                       .FirstOrDefault(x => x.Id == RecipeId);
            var mapped_el = _mapper.Map<RecipeListViewModel>(el);
            return mapped_el;
        }




        private bool IsModelValid(CreateRecipeViewModel model)
        {
            var category = this._appDbContext.Categories.FirstOrDefault(x => x.Id.ToString() == model.category);
            var country = this._appDbContext.Countries.FirstOrDefault(x => x.Id.ToString() == model.country);
            if (category != null && country != null && !string.IsNullOrEmpty(model.Description) && !string.IsNullOrEmpty(model.Topic) && !string.IsNullOrEmpty(model.CookingProcess))
            {
                return true;
            } else
            {
                return false;
            }
        }
        [HttpGet("getRecipes")]
        public IEnumerable<Recipe> getRecipes()
        {
            return _appDbContext.Recipes.ToList();
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            Recipe recipe = _appDbContext.Recipes.FirstOrDefault(x => x.Id == id);
            return recipe;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                _appDbContext.Recipes.Add(recipe);
                _appDbContext.SaveChanges();
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }
      
        [HttpDelete(@"{id}")]
        public IActionResult deleteRecipe(int id)
        {
            Recipe recipe = _appDbContext.Recipes.FirstOrDefault(x => x.Id == id);

            if (recipe != null)
            {
                _appDbContext.Recipes.Remove(recipe);
                _appDbContext.SaveChanges();
            }
            return Ok(recipe);
        }




    }
   
}
