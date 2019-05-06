using System;
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


       
     



        [HttpGet("{id}")]
        public IActionResult ReadRecipeById(int id)
        {

            Recipe rec = _appDbContext.Recipes.Single(r => r.Id == id);
            rec.Gallery = new Gallery {  Photos = new List<Photo> { new Photo { Path = "https://gastronomicallyyours.blog/wp-content/uploads/2019/01/Chettinad-Chicken-Masala.jpg" }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW-Ugj6_2WJ8L49MVU5xIg9zIltCAc_FU9IgO9TqJd04d3ngD" }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXgRyhGZ1yKUbxhIk_g-CxEDF_t2ayNvR7B0lcryBOYGyy5Z2aQ" } } };
            _appDbContext.Recipes.Attach(rec);
            _appDbContext.SaveChanges();
            return new ObjectResult(rec);

        }
    }
}