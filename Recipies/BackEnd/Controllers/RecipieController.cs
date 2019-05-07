﻿using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.ViewModels;
using BackEnd.Services;
using System.Collections.Generic;
using AutoMapper;
using System.Linq;

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
        public IActionResult GetRecipeById(int RecipeId)
        {





            Recipe recipe = _appDbContext.Recipes.First(r => r.Id == RecipeId);
            recipe.Gallery = new Gallery {  Photos = new List<Photo> { new Photo { Path = "https://gastronomicallyyours.blog/wp-content/uploads/2019/01/Chettinad-Chicken-Masala.jpg" }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW-Ugj6_2WJ8L49MVU5xIg9zIltCAc_FU9IgO9TqJd04d3ngD" }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXgRyhGZ1yKUbxhIk_g-CxEDF_t2ayNvR7B0lcryBOYGyy5Z2aQ" } } };
            recipe.Category = new Category {  Name = "FLAVOURS OF CHETTINAD" };
            recipe.Country = new Country {  Name = "Ukraine" };
            if (recipe == null)
                return NotFound();
            return new ObjectResult(recipe);

        }
    }
   
}
