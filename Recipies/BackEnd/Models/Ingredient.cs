using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Kkal_100g { get; set; }
        public double Fats_100g { get; set; }
        public double Proteins_100g { get; set; }
        public double Carbohydrates_100g { get; set; }
        public IEnumerable<Vitamin> Vitamins { get; set; }
        public IEnumerable<MicroElement> MicroElements { get; set; }



    }
}
