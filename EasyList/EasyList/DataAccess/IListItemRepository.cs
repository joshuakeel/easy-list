using System.Collections.Generic;

namespace EasyList.DataAccess
{
    public interface IListItemRepository
    {
        public List<ListItem> GetAll();
        public ListItem Get(int id);
        public ListItem Add(ListItem listItem);
        public void Delete(int id);
    }
}
