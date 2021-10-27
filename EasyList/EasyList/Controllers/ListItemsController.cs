using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using EasyList.DataAccess;
using Microsoft.AspNetCore.Http;

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
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Get([FromRoute] int id)
        {
            var listItem = _listItemRepository.Get(id);

            if (listItem != null)
                return Ok(listItem);

            return NotFound();
        }

        [HttpDelete]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult Delete([FromRoute] int id)
        {
            _listItemRepository.Delete(id);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<ListItem> Post([FromBody] string name)
        {
            var listItem = new ListItem { Name = name };

            listItem = _listItemRepository.Add(listItem);

            return CreatedAtAction(nameof(Get), new { id = listItem.Id }, listItem);
        }
    }
}
