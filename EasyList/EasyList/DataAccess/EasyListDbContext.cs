using Microsoft.EntityFrameworkCore;

namespace EasyList.DataAccess
{
    public class EasyListDbContext : DbContext
    {
        public EasyListDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ListItem> ListItems { get; set; }
    }
}