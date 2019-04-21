import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyrecipesComponent} from './myrecipes/myrecipes.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';
//PrimeNG
import {BlockUIModule} from 'primeng/blockui';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageModule} from 'primeng/message';


// i  mport {MenuItem} from 'primeng/api';
//////Routes
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes =[
{
 path:'favourite-recipes',
 component: FavouriteRecipesComponent
},
{
 path: 'user-profile',
  component: UserProfileComponent
},
{
  path: 'myrecipes',
  component: MyrecipesComponent
},
{
  path: 'editprofile',
  component: EditprofileComponent
}

];


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserProfileComponent,
    MyrecipesComponent,
    EditprofileComponent,
    FavouriteRecipesComponent,
    //BrowserAnimationsModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BlockUIModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    
    TabMenuModule,
    MessageModule,
  //  TabMenuModule,
    RatingModule,
  
    //CardModule,
   // AccordionModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
    
    //   { path: '', component: HomeComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    //   { path: 'user-profile', component: UserProfileComponent },
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
