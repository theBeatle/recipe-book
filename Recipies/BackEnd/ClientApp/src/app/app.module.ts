import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {AccordionModule} from 'primeng/accordion'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MenuItem} from 'primeng/api';     
import {CardModule} from 'primeng/card';

import { IngredientsService } from './ingredients.service';
import { VitaminsService } from './vitamins.service';
import { MicroElementsService } from './micro.elements.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {IngredientComponent } from './ingredients/ingredient.component';
import { VitaminComponent } from './vitamins/vitamin.component';
import { MicroElementComponent } from './micro-elements/microelement.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    IngredientComponent,
    VitaminComponent,
    MicroElementComponent,
   

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      
    ])
  ],
  providers: [
    HttpClientModule,
    IngredientsService,
    VitaminsService,
    MicroElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
