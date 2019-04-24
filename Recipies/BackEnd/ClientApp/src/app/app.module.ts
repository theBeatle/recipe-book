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

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {RecipeComponent} from './recipes/recipe.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { RecipeService } from './recipe.service';
@NgModule({

  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeComponent
    HomeComponent,
    LoginFormComponent
  ],


  imports: [

  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AccordionModule,
    CardModule,
    ButtonModule,
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
      { path: 'registration', component: RegistrationFormComponent }

    ])
  ],
  providers: [
    HttpClientModule,
    FetchDataComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  providers: [
    HttpClientModule,
    RecipeService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
