using System;

namespace BackEnd.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public DateTime SendTime { get; set; }

        public User User { get; set; }

        public Recipe Recipe { get; set; }
    }
}