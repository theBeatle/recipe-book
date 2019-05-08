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
    public class RecipeController : ControllerBase
    {
        DatabaseContext db;
        public RecipeController(DatabaseContext context)
        {
            db = context;
            if (!db.Recipes.Any())
            {
               db.Categories.Add(new Category { Name="Desserts" });
                db.Categories.Add(new Category { Name = "Sushi" });
                db.Categories.Add(new Category { Name = "Pizza" });
                db.Countries.Add(new Country { Name = "USA" });
                db.Users.Add(new User { FirstName = "Vasyan", LastName = "Vasyanenko", NickName = "VasaV",Raiting=5});
                db.Recipes.Add(new Recipe { Topic = "Cake", Description = "with fruits", CookingProcess = "...", Category = { Id = 1 }, Country = { Id = 1 }, CreationDate = DateTime.Now, Rating = 5 });
                db.Recipes.Add(new Recipe { Topic = "Sushi", Description = "with ...", CookingProcess = "...", Category = { Id = 2 }, Country = { Id = 1 } });

              //  db.Recipes.Add(new Recipe { Topic = "Cake", Description = "with fruits", CookingProcess = "..." });
               // db.Recipes.Add(new Recipe { Topic = "Sushi", Description = "with fish", CookingProcess = "..." });
                //db.Recipes.Add(new Recipe { Topic = "Pizza", Description = "with chiken", CookingProcess = "..." });
                db.SaveChanges();
            }
           // 
             //db.Recipes.Add(new Recipe { Topic = "Cake", Description = "with fruits", CookingProcess = "..." });
             // db.Recipes.Add(new Recipe { Topic = "Sushi", Description = "with fish", CookingProcess = "..." });
              db.Recipes.Add(new Recipe { Topic = "Pizza", Description = "with chiken", CookingProcess = "..." });
              db.SaveChanges();
        }
        [HttpGet("getRecipes")]
        public IEnumerable<Recipe> getRecipes()
        {
            return db.Recipes.ToList();
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            Recipe recipe = db.Recipes.FirstOrDefault(x => x.Id == id);
            return recipe;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                db.Recipes.Add(recipe);
                db.SaveChanges();
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }
        [HttpDelete(@"{id}")]
        public IActionResult deleteRecipe(int id)
        {
            Recipe recipe = db.Recipes.FirstOrDefault(x => x.Id == id);

            if (recipe != null)
            {
                db.Recipes.Remove(recipe);
                db.SaveChanges();
            }
            return Ok(recipe);
        }
      
    }
}