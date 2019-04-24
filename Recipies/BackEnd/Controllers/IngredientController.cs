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

        public IngredientController(DatabaseContext context)
        {
            db = context;
            if (!db.Ingredients.Any())
            {
                db.Ingredients.Add(new Ingredient { Name = "Tomato", Fats_100g = 0.2, Proteins_100g = 0.9,
                    Carbohydrates_100g = 2.6, Description = "The tomato is the edible, often red, berry of the plant Solanum lycopersicum", Kkal_100g = 18}) ;
                db.Ingredients.Add(new Ingredient { Name = "Cabbage", Description="" , Kkal_100g=25, Carbohydrates_100g=3.3, Fats_100g=0.1, Proteins_100g=1.28});

                db.SaveChanges();
            }
        }

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