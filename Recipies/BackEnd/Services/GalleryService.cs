﻿using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class GalleryService
    {
        private readonly DatabaseContext _appDbContext;
        public GalleryService(DatabaseContext appDbContext)
        {
            this._appDbContext = appDbContext;
            
        }
        public void UploadPhotoToDb(int RecipeId, string fullPath)
        {
            
            var photo = new Photo() { Path = fullPath };

            var edited = this._appDbContext.Recipes.Include(a => a.Country).Include(a => a.Category).Include(a => a.Gallery).Include(a => a.User)
                    .FirstOrDefault(res => res.Id == RecipeId);

            if (this._appDbContext.Recipes.Include(a => a.Gallery)
                .FirstOrDefault(x => x.Id == RecipeId).Gallery == null)
            {
                var list = new List<Photo>();
                list.Add(photo);
                edited.Gallery = new Gallery() { Photos = list };
            }
            else
            {
                edited.Gallery.Photos.Add(photo);
            }

            this._appDbContext.Recipes.Attach(edited);
            this._appDbContext.Entry(edited).State = EntityState.Modified;
            this._appDbContext.SaveChanges();
        }
    }
}
