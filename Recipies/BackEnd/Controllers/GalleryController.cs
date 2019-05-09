using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BackEnd.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/Gallery")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        private readonly GalleryService _galleryService;
        private readonly RecipeService _recipeService;
        
        public GalleryController(GalleryService galleryService, RecipeService recipeService)
        {
            _galleryService = galleryService;
            _recipeService = recipeService;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("UploadGallery")]
        public IActionResult UploadPhoto(int RecipeId)
        {
            
            try
            {
                var file = Request.Form.Files[0];
                var pathToSave = Directory.CreateDirectory(
                                    Path.Combine("wwwroot", "Galleries", 
                                    _recipeService.getUserIdByRecipeId(RecipeId))).FullName;


                if (file.Length > 0)
                {
                    var time = DateTime.Now.ToFileTime();
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(pathToSave, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    _galleryService.UploadPhotoToDb(RecipeId, fullPath);

                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}