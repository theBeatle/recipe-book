using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.ViewModels.RecipeViewModels
{
    public class CreateRecipeViewModel
    {
        public string Topic { get; set; }
        public string uid { get; set; }
        public string country { get; set; }
        public string category { get; set; }
        public string Description { get; set; }
        public string CookingProcess { get; set; }
    }
}
