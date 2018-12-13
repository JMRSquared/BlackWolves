using System.Collections.Generic;
using System.Threading.Tasks;
using BlackWolves.Models;

namespace BlackWolves.MicroServices.Users {
    public interface IUsersRepository {
        Task<List<User>> GetUsersAsync ();
    }
}