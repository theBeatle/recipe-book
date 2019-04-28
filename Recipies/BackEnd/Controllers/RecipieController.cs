using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.ViewModels;
using BackEnd.Services;


namespace BackEnd.Controllers
{
    [Route("api/Recipe")]
    [ApiController]
    public class RecipieController : ControllerBase
    {

        private readonly RecipeService _recipeService;

        public RecipieController(RecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        [HttpGet]
        [Route("all")]
        public async Task<RecipeViewModel> Index(int? category, string name, int page = 1,
            SortState sortOrder = SortState.TopicAsc)
        {
            return await _recipeService.GetRecipe(category, name, page, sortOrder);
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
    }
   
}
