import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './services/user.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({

  declarations: [
    AppComponent,
    AccountComponent,
    NavMenuComponent,
    FetchDataComponent,
    CounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    UserService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
