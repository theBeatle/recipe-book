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
import { RecipeService } from './services/recipe.service';

import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { RecipeFeedbackComponent } from './components/recipe-feedback/recipe-feedback.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';
import { DataEditComponent } from './components/data-edit/data-edit.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    LoginFormComponent,
    RecipeListComponent,
    LoaderComponent,
    ContactUsComponent,
    RecipeFeedbackComponent,
    CreateRecipeComponent,
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
      { path: 'create', component: CreateRecipeComponent, canActivate: [AuthGuard] },
      { path: 'feedback', component: RecipeFeedbackComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'recipe-list', component: RecipeListComponent },
      { path: 'registration', component: RegistrationFormComponent },
      { path: 'contact', component: ContactUsComponent}
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
