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
        DatabaseContext db;
        [HttpGet("getAllMicroElements")]
        public IEnumerable<MicroElement> getAllMicroElements()
        {
            return db.MicroElements.ToList();
        }
        [HttpGet("getAllIngredients")]
        public IEnumerable<Ingredient> getAllIngredients()
        {
            return db.Ingredients.ToList();
        }
        [HttpGet("getAllVitamins")]
        public IEnumerable<Vitamin> getAllVitamins()
        {
            return db.Vitamins.ToList();
        }
    }
}