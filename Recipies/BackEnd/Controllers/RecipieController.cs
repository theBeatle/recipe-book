﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
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

     



        [HttpGet("{id}")]
        public IActionResult ReadRecipeById(int id)
        {
            Recipe recipe = new Recipe();
            recipe.Topic = "Test Recipe";
            recipe.Rating = 5;
            recipe.ViewsCounter = 15;
            recipe.Gallery = new Gallery { Id = 1, Photo = new Photo { Path = "https://gastronomicallyyours.blog/wp-content/uploads/2019/01/Chettinad-Chicken-Masala.jpg", Id = 1 } };
            recipe.Description = "Recipe Test Description | Recipe Test Description | Recipe Test Description  ";
            recipe.CreationDate = DateTime.Now;
            recipe.Country = new Country { Id = 1, Name = "Ukraine" };
            recipe.CookingProcess = "Test Cooking process1 | Test Cooking process2  | Test Cooking process3";
            recipe.Category = new Category { Id = 1, Name = "TestCategory" };
            return new ObjectResult(recipe);
        }
    }
}