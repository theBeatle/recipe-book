using System.Collections.Generic;

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