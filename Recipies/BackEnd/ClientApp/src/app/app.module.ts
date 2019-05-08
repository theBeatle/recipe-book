import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';
import { LoaderComponent } from './components/recipe-list/loader/loader.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { ContactUsComponent } from './components/contact-us/contact-us.component';



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

  
    
    HomeComponent,
    LoginFormComponent,
    DetailedRecipeComponent,
    RecipeListComponent,
    LoaderComponent,
    ContactUsComponent,
    RecipeFeedbackComponent,
    RatingComponent,
  ],

  imports: [
    InfiniteScrollModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'counter', component: CounterComponent },
      { path: 'feedback', component: RecipeFeedbackComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'recipe-list', component: RecipeListComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'contact', component: ContactUsComponent},
      { path: 'registration', component: RegistrationFormComponent },
      { path:'recipecomp',component:DetailedRecipeComponent},

    ])
  ],
  providers: [
    HttpClientModule,
    FetchDataComponent,
    ContactUsComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
