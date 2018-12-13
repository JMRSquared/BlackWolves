using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BlackWolves.MicroServices.Users;
using BlackWolves.Models;

namespace BlackWolves.Apis {
  [Route ("api/[controller]")]
  public class UsersServiceController : Controller {
    IUsersRepository _repo;

    public UsersServiceController (IUsersRepository repo) {
      _repo = repo;
    }

    [HttpGet]
    [Route ("get/all/users")]
    public async Task<List<User>> GetUsers () {
      return await _repo.GetUsersAsync ();
    }

  }
}