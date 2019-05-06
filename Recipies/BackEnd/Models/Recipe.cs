using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        public Country Country { get; set; }

        public User User { get; set; }

        public Category Category { get; set; }


        public string Description { get; set; }

        public int ViewsCounter { get; set; }

        public DateTime CreationDate { get; set; }

        public string CookingProcess { get; set; }

        public Gallery Gallery { get; set; }

        public double Rating { get; set; }

        //public Ingredient[] Ingredients { get; set; }



        public ICollection<Comment> Comments { get; set; }

        public Recipe()
        {
            Comments = new List<Comment>();
        }
    }
}
