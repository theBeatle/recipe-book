import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RecipeComponent } from './recipes/recipe.component';
import { RecipeService } from './services/recipe.service';
import { IngredientsService } from './services/ingredients.service';
import { VitaminsService } from './services/vitamins.service';
import { MicroElementsService } from './services/micro.elements.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './components/ingredients/ingredient.component';
import { VitaminComponent } from './components/vitamins/vitamin.component';
import { MicroElementComponent } from './components/micro-elements/microelement.component';
import { CommonModule } from '@angular/common';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { MyrecipesComponent } from './components/myrecipes/myrecipes.component';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';
import { LoaderComponent } from './components/recipe-list/loader/loader.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RecipeFeedbackComponent } from './components/recipe-feedback/recipe-feedback.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { UploadGalleryComponent } from './components/upload-gallery/upload-gallery.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';



import { RecipeGalleriaComponent } from './recipe-detailed-info-components/recipe-galleria/recipe-galleria.component';
import { RecipeIngradientsComponent } from './recipe-detailed-info-components/recipe-ingradients/recipe-ingradients.component';
import { RecipeDirectionsComponent } from './recipe-detailed-info-components/recipe-directions/recipe-directions.component';


import { RecipeService } from './services/recipe.service';
import { DetailedRecipeComponent } from './components/detailed-recipe/detailed-recipe.component';


import { RecipeFeedbackComponent } from './components/recipe-feedback/recipe-feedback.component';
import { RatingComponent } from './recipe-detailed-info-components/rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeGalleriaComponent,
    RecipeIngradientsComponent,
    RecipeDirectionsComponent,

  
    
    UserProfileComponent,
    RecipeComponent,
    IngredientComponent,
    VitaminComponent,
    MicroElementComponent,
    HomeComponent,
    LoginFormComponent,
    EditprofileComponent,
    MyrecipesComponent,
    FavouriteRecipesComponent,
    DetailedRecipeComponent,
    RecipeListComponent,
    LoaderComponent,
    ContactUsComponent,
    RecipeFeedbackComponent,
    RecipeEditComponent,
    UploadGalleryComponent,
    CreateRecipeComponent
    CreateRecipeComponent,
    RatingComponent,
   
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'create',
        component: CreateRecipeComponent,
        canActivate: [AuthGuard]
      },
      { path: 'feedback', component: RecipeFeedbackComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'home', component: HomeComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'contact', component: ContactUsComponent },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
      { path: 'recipe-edit/:id', component: RecipeEditComponent},
      { path: 'editprofile', component: EditprofileComponent },
      { path: 'myrecipes', component: MyrecipesComponent },
      { path: 'favourite-recipes', component: FavouriteRecipesComponent },
      { path: 'recipe-list', component: RecipeListComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'contact', component: ContactUsComponent},
      { path: 'registration', component: RegistrationFormComponent },
      { path:'recipecomp',component:DetailedRecipeComponent},

      { path: 'recipes', component: RecipeComponent }
    ])
  ],
  providers: [
    HttpClientModule,
    IngredientsService,
    VitaminsService,
    MicroElementsService,
    RecipeService,
    ContactUsComponent,
    LoginFormComponent,
    UserProfileComponent,
    RegistrationFormComponent,
    RecipeService,
    RecipeComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
