using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class FeedBackMessage
    {
        public int ID { get; set; }
        public string Text{ get; set; }
        public DateTime Date { get; set; }
    }
}
