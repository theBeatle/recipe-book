using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class IngredientRecipe
    {
        public int Id { get; set; }
        public int ingredient_id { get; set; }
        public int meassurement_id { get; set; }
        public int RecipeId { get; set; }
        public double count { get; set; }



    }
}
