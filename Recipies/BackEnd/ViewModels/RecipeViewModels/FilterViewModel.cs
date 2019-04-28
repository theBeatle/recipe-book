using BackEnd.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace BackEnd.ViewModels.RecipeViewModels
{
    public class FilterViewModel
    {
        public FilterViewModel(List<Category> categories, int? category, string name)
        {
            categories.Insert(0, new Category { Name = "All", Id = 0 });
            Categories = new SelectList(categories, "Id", "Name", category);
            SelectedCategory = category;
            SelectedName = name;
        }
        public SelectList Categories { get; private set; } 
        public int? SelectedCategory { get; private set; }   
        public string SelectedName { get; private set; }    
    }
}