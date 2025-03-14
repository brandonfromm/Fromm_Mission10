using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BowlingController : ControllerBase
    {
        private BowlingDbContext _bowlingcontext;

        public BowlingController(BowlingDbContext temp)
        {
            _bowlingcontext = temp;
        }

        [HttpGet(Name = "BowlerInfo")]
        public IEnumerable<Bowler> Get()
        {
            var bowlers = _bowlingcontext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();
            return (bowlers);
        }
    }
}