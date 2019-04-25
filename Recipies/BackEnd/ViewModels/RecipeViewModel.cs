using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.ViewModels
{
    public class RecipeViewModel
    {
        public string CountryName { get; set; }

        public string CategoryName { get; set; }

        public string Topic { get; set; }

        public string Description { get; set; }

        public int ViewsCounter { get; set; }

        public DateTime CreationDate { get; set; }

        public string CookingProcess { get; set; }

        public ICollection<string> Gallery { get; set; }

        public double Rating { get; set; }
    }
}
