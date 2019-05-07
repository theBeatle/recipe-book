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
    }
   
}
