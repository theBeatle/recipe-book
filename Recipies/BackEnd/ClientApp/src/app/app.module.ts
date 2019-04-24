import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';


//mycomponents
import { RecipeInfoComponent } from './recipe-detailed-info/recipe-info/recipe-info.component';
import { RecipeGalleriaComponent } from './recipe-detailed-info/recipe-galleria/recipe-galleria.component';
import { RecipeIngradientsComponent } from './recipe-detailed-info/recipe-ingradients/recipe-ingradients.component';
import { RecipeDirectionsComponent } from './recipe-detailed-info/recipe-directions/recipe-directions.component';
import { RecipeRaitingComponent } from './recipe-detailed-info/recipe-raiting/recipe-raiting.component';

//myservices
import { RecipeService } from './services/recipe.service';


@NgModule({

  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeInfoComponent,
    RecipeGalleriaComponent,
    RecipeIngradientsComponent,
    RecipeDirectionsComponent,
    RecipeRaitingComponent,
  
    
    HomeComponent,
    LoginFormComponent
  ],


  imports: [

  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'counter', component: CounterComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path:'recipecomp',component:RecipeInfoComponent},

    ])
   
  ],
  providers: [
    HttpClientModule,
    FetchDataComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    RecipeService,

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {

}
