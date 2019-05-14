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

namespace BackEnd.Controllers
{
    [Route("api/Recipe")]
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

        [HttpGet]
        [Route("ReadRecipeById")]
        public Recipe GetRecipeById(int RecipeId)
        {
            Recipe recipe = new Recipe();
            recipe.Topic = "Test Recipe";
            recipe.Rating = 5;
            recipe.ViewsCounter = 15;

            recipe.Description = "Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description";
            recipe.CreationDate = DateTime.Now;
            recipe.Country.Name = "Ukraine";
            recipe.CookingProcess = "";
            recipe.Category.Name = "TestCategory";
            return recipe;
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
