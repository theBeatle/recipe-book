using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly DatabaseContext _appDbContext;

        public IngredientController(DatabaseContext context)
        {
            this._appDbContext = context;
         }

        [HttpGet("getAllMicroElements")]
        public IEnumerable<MicroElement> getAllMicroElements()
        {
            return _appDbContext.MicroElements.ToList();
        }
        [HttpGet("getAllIngredients")]
        public IEnumerable<Ingredient> getAllIngredients()
        {
            return _appDbContext.Ingredients.ToList();
        }
        [HttpGet("getAllVitamins")]
        public IEnumerable<Vitamin> getAllVitamins()
        {
            return _appDbContext.Vitamins.ToList();
        }
    }
}