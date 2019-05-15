using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.ViewModels.RecipeViewModels
{
    public class RatingRecipeViewModel
    {
        public int RecipeId { get; set;}

        public int CountStar {get;set;}

        public string UserId { get; set;}
    }
}
