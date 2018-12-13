using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using BlackWolves.Models;

namespace BlackWolves.MicroServices.Users {
    public class UsersRepository : IUsersRepository {

        private readonly UsersDbContext _context;
        private readonly ILogger _logger;

        public UsersRepository (UsersDbContext context, ILoggerFactory loggerFactory) {
            _context = context;
            _logger = loggerFactory.CreateLogger ("UsersRepository");
        }
        public async Task<List<User>> GetUsersAsync () {
            return await _context.Users.ToListAsync ();
        }
    }
}