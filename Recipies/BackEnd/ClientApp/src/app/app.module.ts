import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//PrimeNG
//import {AccordionModule} from 'primeng/accordion';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BlockUIModule} from 'primeng/blockui';
import {ButtonModule} from 'primeng/button';
//import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
//import {TabMenuModule} from 'primeng/tabmenu';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserProfileComponent,
    
    //BrowserAnimationsModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BlockUIModule,
    ButtonModule,
  //  TabMenuModule,
    RatingModule,
  
    //CardModule,
   // AccordionModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user-profile', component: UserProfileComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
