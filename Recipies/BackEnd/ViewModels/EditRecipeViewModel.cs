using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.ViewModels
{
    public class EditRecipeViewModel
    {

            public int Id { get; set; }
            public string Topic { get; set; }
            public string Country { get; set; }
            public string Category { get; set; }
            public string Description { get; set; }
            public string CookingProcess { get; set; }
        
    }
}
