import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {RecipeComponent} from './recipes/recipe.component';
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
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';



import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { MyrecipesComponent } from './components/myrecipes/myrecipes.component';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';



// export const routerConfig: Routes = [
//   {
//       path: 'user-profile',
//       component: UserProfileComponent
//   },
//   {
//       path: 'editprofile',
//       component: EditprofileComponent
//   }
// ];
import { LoaderComponent } from './components/recipe-list/loader/loader.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';
import { RecipeService } from './services/recipe.service';
 import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { RecipeFeedbackComponent } from './components/recipe-feedback/recipe-feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    UserProfileComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeComponent,
    IngredientComponent,
    VitaminComponent,
    MicroElementComponent,
    HomeComponent,
    LoginFormComponent,
    EditprofileComponent,
    MyrecipesComponent,
    FavouriteRecipesComponent,
    RecipeListComponent,
    LoaderComponent,
    ContactUsComponent,
    RecipeFeedbackComponent,
    CreateRecipeComponent,
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
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'counter', component: CounterComponent },
      { path: 'create', component: CreateRecipeComponent, canActivate: [AuthGuard] },
      { path: 'feedback', component: RecipeFeedbackComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'feature', component: IngredientComponent },

      { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
      {path : 'editprofile', component: EditprofileComponent},
      {path : 'myrecipes', component: MyrecipesComponent},
      {path : 'favourite-recipes', component: FavouriteRecipesComponent},
      {path : 'recipe-list', component: RecipeListComponent},

     
      { path: 'contact', component: ContactUsComponent},
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'recipes', component: RecipeComponent }

    ])
  ],
  providers: [
    HttpClientModule,
    IngredientsService,
    VitaminsService,
    MicroElementsService,
    RecipeService,   
    FetchDataComponent,
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
