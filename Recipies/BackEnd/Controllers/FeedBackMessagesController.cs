using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBackMessagesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public FeedBackMessagesController(DatabaseContext context)
        {
            _context = context;
        }

         // GET: api/FeedBackMessages
         [HttpGet]
         public async Task<ActionResult<IEnumerable<FeedBackMessage>>> GetFeedBackMessage()
         {
             return await _context.FeedBackMessages.ToListAsync();
         }



        // GET: api/FeedBackMessages/5
        /// <summary>
        /// just description
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        
        public async Task<ActionResult<FeedBackMessage>> GetFeedBackMessage(int id)
        {
            var feedBackMessage = await _context.FeedBackMessages.FindAsync(id);

            if (feedBackMessage == null)
            {
                return NotFound();
            }

            return feedBackMessage;
        }

        /*// PUT: api/FeedBackMessages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeedBackMessage(int id, FeedBackMessage feedBackMessage)
        {
            if (id != feedBackMessage.ID)
            {
                return BadRequest();
            }

            _context.Entry(feedBackMessage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedBackMessageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }*/

        // POST: api/Cr
        [HttpPost]
        public async Task<ActionResult<FeedBackMessage>> PostFeedBackMessage(FeedBackMessage feedBackMessage)
        {
            _context.FeedBackMessages.Add(feedBackMessage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeedBackMessage", new { id = feedBackMessage.ID }, feedBackMessage);
        }

       /* // DELETE: api/FeedBackMessages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FeedBackMessage>> DeleteFeedBackMessage(int id)
        {
            var feedBackMessage = await _context.FeedBackMessage.FindAsync(id);
            if (feedBackMessage == null)
            {
                return NotFound();
            }

            _context.FeedBackMessage.Remove(feedBackMessage);
            await _context.SaveChangesAsync();

            return feedBackMessage;
        }
        */
        private bool FeedBackMessageExists(int id)
        {
            return _context.FeedBackMessages.Any(e => e.ID == id);
        }
    }
}
