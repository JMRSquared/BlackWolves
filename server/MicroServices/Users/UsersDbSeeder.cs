using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using BlackWolves.Models;

namespace BlackWolves.MicroServices.Users {
    public class UsersDbSeeder {
        readonly ILogger _logger;

        public UsersDbSeeder (ILoggerFactory loggerFactory) {
            _logger = loggerFactory.CreateLogger ("UsersDbSeederLogger");
        }

        public async Task SeedAsync (IServiceProvider serviceProvider) {
            using (var serviceScope = serviceProvider.GetRequiredService<IServiceScopeFactory> ().CreateScope ()) {
                var usersDb = serviceScope.ServiceProvider.GetService<UsersDbContext> ();
                if (await usersDb.Database.EnsureCreatedAsync ()) {
                    if (!await usersDb.Users.AnyAsync ()) {
                        // TODO : Remove this code
                        usersDb.Users.Add (new User {
                            Email = "joe@remove.it"
                        });
                        await usersDb.SaveChangesAsync ();
                    }
                }
            }
        }
    }
}