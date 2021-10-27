using System.Collections.Generic;
using System.Linq;

namespace EasyList.DataAccess
{
    public class ListItemRepository : IListItemRepository
    {
        private readonly EasyListDbContext _dbContext;

        public ListItemRepository(EasyListDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ListItem> GetAll()
        {
            return _dbContext.ListItems.ToList();
        }

        public ListItem Get(int id)
        {
            return _dbContext.ListItems.SingleOrDefault(item => item.Id == id);
        }

        public ListItem Add(ListItem listItem)
        {
            _dbContext.ListItems.Add(listItem);
            _dbContext.SaveChanges();

            return listItem;
        }

        public void Delete(int id)
        {
            var listItem = _dbContext.ListItems.SingleOrDefault(item => item.Id == id);

            if(listItem != null)
            {
                _dbContext.ListItems.Remove(listItem);
                _dbContext.SaveChanges();
            }
        }
    }
}
