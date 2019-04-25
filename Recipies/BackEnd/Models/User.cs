
using Microsoft.AspNetCore.Identity;

namespace BackEnd.Models
{
    public class User : IdentityUser
    {
        public string IdentityId { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public double Raiting { get; set; }
        public byte[] Image { get; set; }
        public string Country { get; set; }
    }
}
