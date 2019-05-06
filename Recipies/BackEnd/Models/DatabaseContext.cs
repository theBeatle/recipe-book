using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Models;

namespace BackEnd.Models
{
    public class DatabaseContext: IdentityDbContext<User>
    {
        public DatabaseContext(DbContextOptions options)
        : base(options)
        {
        }

        public new DbSet<User> Users { get; set; }
        public  DbSet<FeedBackMessage> FeedBackMessages { get; set; }
        public new DbSet<Recipe> Recipes { get; set; }
        public new DbSet<Comment> Comments { get; set; }
    }
}

