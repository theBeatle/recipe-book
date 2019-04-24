import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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

@NgModule({

  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    UserProfileComponent,
    CounterComponent,
    HomeComponent,
    LoginFormComponent,
    EditprofileComponent,
    MyrecipesComponent,
    FavouriteRecipesComponent
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
      { path: 'user-profile', component: UserProfileComponent },
      {path : 'editprofile', component: EditprofileComponent},
      {path : 'myrecipes', component: MyrecipesComponent},
      {path : 'favourite-recipes', component: FavouriteRecipesComponent},

    ])
  ],  
  providers: [
    HttpClientModule,
    FetchDataComponent,
    LoginFormComponent,
    UserProfileComponent,
    RegistrationFormComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
