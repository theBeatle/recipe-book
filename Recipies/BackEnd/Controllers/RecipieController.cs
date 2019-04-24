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
        [HttpGet]
        [Route("ReadRecipeById")]
        public Recipe GetRecipeById(int RecipeId)
        {
            Recipe recipe=new Recipe();
            recipe.Topic = "Test Recipe";
            recipe.Rating = 5;
            recipe.ViewsCounter = 15;
            recipe.Gallery.Photo.Path = "";
            recipe.Description = "Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description   Recipe Test Description  Recipe Test Description  Recipe Test Description";
            recipe.CreationDate = DateTime.Now;
            recipe.Country.Name = "Ukraine";
            recipe.CookingProcess = "";
            recipe.Category.Name = "TestCategory";
            return recipe;
        }
    }
}