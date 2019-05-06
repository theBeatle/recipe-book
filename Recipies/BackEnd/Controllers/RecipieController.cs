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



            Recipe recipe = new Recipe();

            recipe.Topic = "Chettinad Chicken";
            recipe.Rating = 5;
            recipe.ViewsCounter = 15;
            recipe.Gallery = new Gallery { Id = 1, Photos = new List<Photo> { new Photo { Path = "https://gastronomicallyyours.blog/wp-content/uploads/2019/01/Chettinad-Chicken-Masala.jpg", Id = 1 }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW-Ugj6_2WJ8L49MVU5xIg9zIltCAc_FU9IgO9TqJd04d3ngD", Id = 2 }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXgRyhGZ1yKUbxhIk_g-CxEDF_t2ayNvR7B0lcryBOYGyy5Z2aQ", Id = 3 } } };
            recipe.Description = "Chicken Chettinad or Chettinad chicken is a classic Indian recipe, from the cuisine of Chettinad. It consists of chicken marinated in yogurt, turmeric and a paste of red chillies, kalpasi, coconut, poppy seeds, coriander seeds, cumin seeds, fennel seeds, black pepper, ground nuts, onions, garlic and gingelly oil. It is served hot and garnished with coriander leaves, accompanied with boiled rice or paratha.";
            recipe.CreationDate = DateTime.Now;
            recipe.Country = new Country { Id = 1, Name = "Ukraine" };
            recipe.CookingProcess = "Soak Poppy Seeds In Warm Water For 10 Minutes. | Wash And Cut Chicken Into Medium Pieces.  | Make Paste From Ginger,Garlic,Green Chilies And Poppy Seeds And Keep This Aside.|" +
                "Heat A Frying Pan To Medium-High, Add 1 Tsp Oil. When Hot, Add The Cumin Seeds, Coriander Seeds, Fennel Seeds, Black Peppercorns, Cinnamon Stick, Cardamom, Cloves Dried Red Chillies,Curry Leaves,.|" +
                "Stir Well This Constantly Until Lightly Roasted. Cool And Grind To A Powder.|" +
                "Heat Oil In A Large Saucepan Over A Medium-High Heat. When Hot, Add The Bay Leave.Shallots/Small Onions And Curry Leaves And Saute Till Transparent.|" +
                "Add The Kashmiri Chilli Powder And Turmeric Powder And Just Stir For Few Seconds.|" +
                "Add The Grounded Ginger,Garlic,Green Chillie And Poppy Paste. Continue To Stir And Fry For About 4 Minutes, Drizzling Little Water To Prevent Sticking.|" +
                "Add Chicken And Cook On High Heat,Stir Until They Are Well Coated With The Masala For About 4-5 Minutes.|" +
                "Reduce To Medium Heat, Add Salt,Tomatoes And Combine Well. Cook The Chicken For 4-5 Mts, Uncovered, Now Add The Coconut Milk And 1/2cup Of Water(If Needed) Allow To Boil.|" +
                "Turn The Heat To Medium Low, Cover And Simmer Until The Chicken Is Almost Cooked, About 20-25 Minutes. Open Lid And Combine Well.|" +
                "Finally Add The Ground Masala Powder And Cook For 3 Mts. Turn Off Heat.|" +
                "Garnish With Curry Leaves.Yummy Chettinad Chicken Curry Is Ready.";
            recipe.Category = new Category { Id = 1, Name = "FLAVOURS OF CHETTINAD" };
            _appDbContext.Recipes.Add(recipe);
            _appDbContext.SaveChanges();

            Recipe rec = _appDbContext.Recipes.Single(r => r.Id == id);
            return new ObjectResult(rec);

        }
    }
}