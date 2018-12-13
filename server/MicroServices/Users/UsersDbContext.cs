using Microsoft.EntityFrameworkCore;
using BlackWolves.Models;

namespace BlackWolves.MicroServices.Users {
    public class UsersDbContext : DbContext {
        public DbSet<User> Users { get; set; }
        public UsersDbContext (DbContextOptions<UsersDbContext> options) : base (options) { }
    }
}