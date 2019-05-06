using System;
using System.Collections.Generic;

namespace BackEnd.ViewModels.RecipeViewModels
{
    public class RecipeListViewModel
    {
        public int Id { get; set; }
        public string CountryName { get; set; }

        public string CategoryName { get; set; }

        public string Topic { get; set; }

        public string Description { get; set; }

        public string UserId { get; set; }

        public int ViewsCounter { get; set; }

        public DateTime CreationDate { get; set; }

        public string CookingProcess { get; set; }

        public ICollection<string> Gallery { get; set; }

        public double Rating { get; set; }
    }
}
