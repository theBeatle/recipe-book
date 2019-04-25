using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using AutoMapper;
using BackEnd.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    [Route("api/Recipe")]
    [ApiController]
    public class RecipieController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly DatabaseContext _appDbContext;

        public RecipieController(DatabaseContext appDbContext, IMapper mapper)
        {
            this._appDbContext = appDbContext;
            this._mapper = mapper;
        }



        [HttpGet]
        [Route("all")]
        public ICollection<RecipeViewModel> GetAllRecipies()
        {
            var c = _appDbContext.Recipes.ToList()[0];
            var list = new List<RecipeViewModel>();
            foreach(var el in _appDbContext.Recipes.Include(a => a.Country).ToList())
            {
                list.Add(_mapper.Map<RecipeViewModel>(el));
            }
            return list;
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