
using Microsoft.AspNetCore.Identity;
using System;

namespace BackEnd.Models
{
    public class User : IdentityUser
    {
        public string IdentityId { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public double Raiting { get; set; }
        public DateTime LastVisit { get; set; }
    }
}
