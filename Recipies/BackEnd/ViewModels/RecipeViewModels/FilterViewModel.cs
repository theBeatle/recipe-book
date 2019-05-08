using BackEnd.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace BackEnd.ViewModels.RecipeViewModels
{
    public class FilterViewModel
    {
        public FilterViewModel(List<Category> categories, int? category,List<Country> countries,int? country, string name)
        {
            Countries = new SelectList(countries, "Id", "Name", country);
            SelectedCountry = country;
            Categories = new SelectList(categories, "Id", "Name", category);
            SelectedCategory = category;
            SelectedName = name;
        }
        public SelectList Categories { get; private set; } 
        public int? SelectedCategory { get; private set; }
        public SelectList Countries { get; private set; }
        public int? SelectedCountry { get; private set; }
        public string SelectedName { get; private set; }    
    }
}