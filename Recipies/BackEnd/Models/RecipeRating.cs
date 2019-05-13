using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class RecipeRating
    {
        public int Id { get; set; }

        public int Star { get; set; }

        public Recipe Recipe { get; set; }
    }
}
