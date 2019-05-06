using System.Collections.Generic;
using BackEnd.ViewModels.RecipeViewModels;

namespace BackEnd.ViewModels
{
    public class RecipeViewModel
    {
        public IEnumerable<RecipeListViewModel> Recipes { get; set; }
        public PageViewModel PageViewModel { get; set; }
        public FilterViewModel FilterViewModel { get; set; }
        public SortViewModel SortViewModel { get; set; }
    }
}
