using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Recipie
    {
        public int Id { get; set; }

        public string [] Comments { get; set; }

        public string Country { get; set; }

        public User User { get; set; }

        public string Category { get; set; }

        public string Topic { get; set; }

        public string  Description { get; set; }

        public int ViewsCounter { get; set; }

        public DateTime CreationDate { get; set; }

        public string CookingProcess { get; set; }

        public Gallery Gallery { get; set; }

        public double Raiting { get; set; }
        
        public string [] Ingredients { get; set; }



    }
}
