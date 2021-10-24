using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using EasyList.DataAccess;

namespace EasyList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListItemsController : ControllerBase
    {
        private readonly IListItemRepository _listItemRepository;

        public ListItemsController(IListItemRepository listItemRepository)
        {
            _listItemRepository = listItemRepository;
        }

        [HttpGet]
        public IEnumerable<ListItem> Get()
        {
            return _listItemRepository.GetAll();
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult Get([FromRoute] int id)
        {
            var listItem = _listItemRepository.Get(id);

            if (listItem != null)
                return Ok(listItem);

            return NotFound();
        }

        [HttpDelete]
        [Route("{id}")]
        [ProducesResponseType(204)]
        public IActionResult Delete([FromRoute] int id)
        {
            _listItemRepository.Delete(id);

            return NoContent();
        }

        [HttpPost]
        public void Post([FromBody] string name)
        {
            var listItem = new ListItem { Name = name };

            _listItemRepository.Add(listItem);

            //TODO: add post return body and 201 Created status
        }
    }
}
