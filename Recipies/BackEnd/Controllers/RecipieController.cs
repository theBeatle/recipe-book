﻿using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.ViewModels;
using BackEnd.Services;
using System.Collections.Generic;
using AutoMapper;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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


        [HttpPost("UpdateRecipeViewsCounter")]
        public void Post(int id, [FromBody]User user)
        {

           
            if (user.LastVisit != DateTime.Today)
            {
                Recipe recipe = _appDbContext.Recipes.First(r => r.Id == id);
                if (recipe != null)
                {
                    
                    recipe.ViewsCounter +=1;
                    _appDbContext.Entry(recipe).State = EntityState.Modified;
                    _appDbContext.SaveChanges();

                }
            }
           
        }

        [HttpGet]
        [Route("ReadRecipeById")]
        public IActionResult GetRecipeById(int RecipeId)
        {

            Recipe recipe;

            //recipe = new Recipe();
            //recipe.Topic = "Satrangi Mutton/ Chicken Biryani";
            //recipe.User = _appDbContext.Users.First(u => u.Email == "123@123");
            //recipe.Rating = 3;
            //recipe.ViewsCounter = 10;
            //recipe.Gallery = new Gallery { Photos = new List<Photo> { new Photo { Path = "data:image/jpeg;base64,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" }, new Photo { Path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW-Ugj6_2WJ8L49MVU5xIg9zIltCAc_FU9IgO9TqJd04d3ngD" }, new Photo { Path = "data:image/jpeg;base64,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" } } };
            //recipe.Description = "Chicken Chettinad or Chettinad chicken is a classic Indian recipe, from the cuisine of Chettinad. It consists of chicken marinated in yogurt, turmeric and a paste of red chillies, kalpasi, coconut, poppy seeds, coriander seeds, cumin seeds, fennel seeds, black pepper, ground nuts, onions, garlic and gingelly oil. It is served hot and garnished with coriander leaves, accompanied with boiled rice or paratha.";
            //recipe.CreationDate = DateTime.Now;
            //recipe.Country = new Country { Name = "Ukraine" };
            //recipe.CookingProcess = "Soak Poppy Seeds In Warm Water For 10 Minutes. | Wash And Cut Chicken Into Medium Pieces.  | Make Paste From Ginger,Garlic,Green Chilies And Poppy Seeds And Keep This Aside.|" +
            //    "Heat A Frying Pan To Medium-High, Add 1 Tsp Oil. When Hot, Add The Cumin Seeds, Coriander Seeds, Fennel Seeds, Black Peppercorns, Cinnamon Stick, Cardamom, Cloves Dried Red Chillies,Curry Leaves,.|" +
            //    "Stir Well This Constantly Until Lightly Roasted. Cool And Grind To A Powder.|" +
            //    "Heat Oil In A Large Saucepan Over A Medium-High Heat. When Hot, Add The Bay Leave.Shallots/Small Onions And Curry Leaves And Saute Till Transparent.|" +
            //    "Add The Grounded Ginger,Garlic,Green Chillie And Poppy Paste. Continue To Stir And Fry For About 4 Minutes, Drizzling Little Water To Prevent Sticking.|" +
            //    "Add The Kashmiri Chilli Powder And Turmeric Powder And Just Stir For Few Seconds.|" +
            //    "Add Chicken And Cook On High Heat,Stir Until They Are Well Coated With The Masala For About 4-5 Minutes.|" +
            //    "Reduce To Medium Heat, Add Salt,Tomatoes And Combine Well. Cook The Chicken For 4-5 Mts, Uncovered, Now Add The Coconut Milk And 1/2cup Of Water(If Needed) Allow To Boil.|" +
            //    "Turn The Heat To Medium Low, Cover And Simmer Until The Chicken Is Almost Cooked, About 20-25 Minutes. Open Lid And Combine Well.|" +
            //    "Finally Add The Ground Masala Powder And Cook For 3 Mts. Turn Off Heat.|" +
            //    "Garnish With Curry Leaves.Yummy Chettinad Chicken Curry Is Ready.";
            //recipe.Category = new Category { Name = "INDIAN LUNCH" };
            //_appDbContext.Recipes.Add(recipe);
            //_appDbContext.SaveChanges();

            recipe = _appDbContext.Recipes
                .Include(r => r.Gallery.Photos)
                .Include(r=>r.Country)
                .Include(r=>r.Category)
                .Include(r=>r.User)
                .First(r => r.Id == RecipeId);
            if (recipe == null)
                return NotFound();
            return new ObjectResult(recipe);

        }
    }
   
}
