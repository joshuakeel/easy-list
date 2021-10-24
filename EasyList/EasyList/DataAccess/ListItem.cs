using System.ComponentModel.DataAnnotations.Schema;

namespace EasyList.DataAccess
{
    [Table("ListItem")]
    public class ListItem
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
