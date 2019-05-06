using System;
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
        public Recipe GetRecipeById(int RecipeId)
        {
           

            Recipe recipe = _appDbContext.Recipes.Single(r => r.Id == RecipeId);

            return recipe;

        }
    }
   
}
