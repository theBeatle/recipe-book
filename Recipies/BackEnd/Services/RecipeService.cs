using AutoMapper;
using BackEnd.Models;
using BackEnd.ViewModels;
using BackEnd.ViewModels.RecipeViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{

    public class RecipeService
    {
        private readonly IMapper _mapper;
        private readonly DatabaseContext _appDbContext;
        public RecipeService(DatabaseContext appDbContext, IMapper mapper)
        {
            this._appDbContext = appDbContext;
            this._mapper = mapper;
        }

      
        public async Task<RecipeViewModel> GetRecipe(int? category,int? country, string name, int page = 1,
            SortState sortOrder = SortState.TopicAsc)
        {
            int pageSize = 9;

            IQueryable<Recipe> RecipeList = _appDbContext.Recipes.Include(a => a.Country).Include(a => a.Category).Include(a => a.Gallery).Include(a => a.User);

            //Filtring
            if (category != null && category != 0)
            {
                RecipeList = RecipeList.Where(p => p.Category.Id == category);
            }
            if (country != null && country != 0)
            {
                RecipeList = RecipeList.Where(p => p.Country.Id == country);
            }
            if (!String.IsNullOrEmpty(name))
            {
                RecipeList = RecipeList.Where(p => p.Topic.Contains(name));
            }


            //Sorting
            switch (sortOrder)
            {
                case SortState.TopicDesc:
                    RecipeList = RecipeList.OrderByDescending(s => s.Topic);
                    break;
                case SortState.RaitingDesc:
                    RecipeList = RecipeList.OrderByDescending(s => s.Rating);
                    break;
                case SortState.RaitingAsc:
                    RecipeList = RecipeList.OrderBy(s => s.Rating);
                    break;
                case SortState.ViewsCounterAsc:
                    RecipeList = RecipeList.OrderBy(s => s.ViewsCounter);
                    break;
                case SortState.ViewsCounterDesc:
                    RecipeList = RecipeList.OrderByDescending(s => s.ViewsCounter);
                    break;
                case SortState.CreationDateAsc:
                    RecipeList = RecipeList.OrderBy(s => s.CreationDate);
                    break;
                case SortState.CreationDateDesc:
                    RecipeList = RecipeList.OrderByDescending(s => s.CreationDate);
                    break;
                default:
                    RecipeList = RecipeList.OrderBy(s => s.Topic);
                    break;
            }

            //Pagination
            var count = await RecipeList.CountAsync();
            var items = await RecipeList.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

            var mappedList = new List<RecipeListViewModel>();

            //Maping RecipeList
            foreach (var el in items)
            {
                mappedList.Add(_mapper.Map<RecipeListViewModel>(el));
            }

            //Creating Model for client
            RecipeViewModel viewModel = new RecipeViewModel
            {
                PageViewModel = new PageViewModel(count, page, pageSize),
                SortViewModel = new SortViewModel(sortOrder),
                FilterViewModel = new FilterViewModel(_appDbContext.Categories.ToList(), 
                                                        category, _appDbContext.Countries.ToList(),
                                                        country, name),
                Recipes = mappedList
            };

            return viewModel;

        }

        public bool EditRecipe(EditRecipeViewModel model)
        {
            if (IsModelValid(model))
            {



                var edited = this._appDbContext.Recipes.Include(a => a.Country).Include(a => a.Category).Include(a => a.Gallery).Include(a => a.User).FirstOrDefault(res => res.Id == model.Id);

                edited.Category = this._appDbContext.Categories.FirstOrDefault(x => x.Name == model.Category);
                edited.Country = this._appDbContext.Countries.FirstOrDefault(x => x.Name == model.Country);
                edited.Description = model.Description;
                edited.Topic = model.Topic;
                edited.CreationDate = DateTime.Now;
                edited.CookingProcess = model.CookingProcess;
                edited.User = this._appDbContext.Recipes.FirstOrDefault(x => x.Id == model.Id).User;

                this._appDbContext.Recipes.Attach(edited);
                this._appDbContext.Entry(edited).State = EntityState.Modified;
                this._appDbContext.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
        private bool IsModelValid(EditRecipeViewModel model)
        {
            var category = this._appDbContext.Categories.FirstOrDefault(x => x.Name == model.Category);
            var country = this._appDbContext.Countries.FirstOrDefault(x => x.Name == model.Country);
            if (category != null && country != null && !string.IsNullOrEmpty(model.Description) && !string.IsNullOrEmpty(model.Topic) && !string.IsNullOrEmpty(model.CookingProcess))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
