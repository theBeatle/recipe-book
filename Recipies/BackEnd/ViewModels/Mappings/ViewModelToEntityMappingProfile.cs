using AutoMapper;
using BackEnd.Models;
using BackEnd.ViewModels.RecipeViewModels;


namespace BackEnd.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, User>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

             CreateMap<Recipe, RecipeListViewModel>()
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
                        src=>src.Gallery.Photos
                    ))
                    .ForMember(dest => dest.UserId,
                    opts => opts.MapFrom(
                        src => src.User.Id
                    ))
                    .ReverseMap();

        }
    }
}
