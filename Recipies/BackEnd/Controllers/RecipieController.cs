using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/Recipe")]
    [ApiController]
    public class RecipieController : ControllerBase
    {


        private readonly DatabaseContext _appDbContext;

        public RecipieController(DatabaseContext appDbContext)
        {
            this._appDbContext = appDbContext;
        }



        [HttpGet]
        [Route("all")]
        public ICollection<Recipe> GetAllRecipies()
        {
            return _appDbContext.Recipes.ToArray();
        }


        [HttpGet]
        [Route("ReadRecipeById")]
        public Recipe GetRecipeById(int RecipeId)
        {
            Recipe recipe=new Recipe();
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