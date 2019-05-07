using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Gallery
    {
        public Gallery()
        {
            Photos = new List<Photo>();
        }

        public int Id { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}
