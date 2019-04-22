import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';




import { IngredientsService } from './services/ingredients.service';
import { VitaminsService } from './services/vitamins.service';
import { MicroElementsService } from './services/micro.elements.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './components/ingredients/ingredient.component';
import { VitaminComponent } from './components/vitamins/vitamin.component';
import { MicroElementComponent } from './components/micro-elements/microelement.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegistrationFormComponent } from './components/account/reg-form/reg-form.component';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/JWT.interceptor';

@NgModule({

  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    FetchDataComponent,
    IngredientComponent,
    VitaminComponent,
    MicroElementComponent,
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
      { path: 'feature', component: IngredientComponent }


    ])
  ],
  providers: [
    HttpClientModule,
    IngredientsService,
    VitaminsService,
    MicroElementsService,
    FetchDataComponent,
    LoginFormComponent,
    RegistrationFormComponent,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
