using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class DatabaseContext: IdentityDbContext<User>
    {
        public DatabaseContext(DbContextOptions options)
        : base(options)
        {
        }

        public new DbSet<User> Users { get; set; }
        public new DbSet<Recipe> Recipes { get; set; }
    }
}

