import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


//primeng module
import {AccordionModule} from 'primeng/accordion';
import {GalleriaModule} from 'primeng/galleria';
import {RatingModule} from 'primeng/rating';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


//mycomponents
import { RecipeInfoComponent } from './recipe-detailed-info/recipe-info/recipe-info.component';
import { RecipeGalleriaComponent } from './recipe-detailed-info/recipe-galleria/recipe-galleria.component';
import { RecipeIngradientsComponent } from './recipe-detailed-info/recipe-ingradients/recipe-ingradients.component';
import { RecipeDirectionsComponent } from './recipe-detailed-info/recipe-directions/recipe-directions.component';
import { RecipeRaitingComponent } from './recipe-detailed-info/recipe-raiting/recipe-raiting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeInfoComponent,
    RecipeGalleriaComponent,
    RecipeIngradientsComponent,
    RecipeDirectionsComponent,
    RecipeRaitingComponent,
  
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AccordionModule,
    GalleriaModule,
    RatingModule,
    

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
     
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
