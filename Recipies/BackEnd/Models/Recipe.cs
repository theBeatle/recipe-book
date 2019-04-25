using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public string Topic { get; set; }
        public Recipe()
        {
            Comments = new List<Comment>();
        }
    }
}
