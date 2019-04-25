using AutoMapper;
using BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, User>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

             CreateMap<Recipe, RecipeViewModel>()
                .ForMember(dest => dest.CountryName,
                    opts => opts.MapFrom(
                        src => src.Country.Name
                    ))
                    .ForMember(dest=>dest.CategoryName, 
                    opts=>opts.MapFrom(
                        src=>src.Category.Name
                    ))
                    .ForMember(dest=>dest.Gallery,
                    opts=>opts.MapFrom(
                        src=>src.Gallery.Photos))
                    .ReverseMap();

        }
    }
}
