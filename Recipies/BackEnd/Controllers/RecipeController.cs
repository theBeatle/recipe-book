using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    public class RecipeController : Controller
    {
        ApplicationContext db = new ApplicationContext();

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Get()
        {
            return Ok(db.Resipes.ToList());
        }

        public IActionResult Delete(int id)
        {
           Recipe recipe = db.Recipes.Find(id);
            if (recipe != null)
            {
                db.Recipes.Remove(recipe);
                db.SaveChanges();
                return Ok(recipe);
            }

            return NotFound();
        }
    }
}