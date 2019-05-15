import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { rS } from '@angular/core/src/render3';
import { User } from 'src/app/models/user';
import { ViewsCounterModel } from 'src/app/models/recipeViewsCounterModel';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.css']
})
export class DetailedRecipeComponent implements OnInit {
  public recipe:Recipe;
  public userid:number;
  
  public message="";
  public model:ViewsCounterModel;
  public RecipeId:number;
  photos: Observable<Gallery[]>
  constructor(private rS:RecipeService, private gS:GalleryService ) { }
  getAllImages(recipeId:number) {
    //  this.photos = new Array();
      this.photos = null;

      this.photos = this.gS.getImages(this.recipe.id);//.subscribe(res => (this.photos = res));
    }
  ngOnInit() {
    
    
     this.GetRecipeById('74');
    
     
  
  }


  GetRecipeById(recipeId:string){
  
   
    this.rS.getRecipeById(recipeId).subscribe( w => {
        
      this.recipe=new Recipe();

      this.recipe = w;
        
      
        
      this.model=new ViewsCounterModel();
      this.model.RecipeId=w.id;
     
      this.rS.updateRecipeViewsCounter(this.model).subscribe(
          () => {this.message = 'Recipe updated!'; },
          () => {this.message = '400 - BAD REQUEST!'; }
          );
       

    });
    

  }

}
