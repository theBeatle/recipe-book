import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { rS } from '@angular/core/src/render3';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.css']
})
export class DetailedRecipeComponent implements OnInit {



  public creationdate:string;
  public userid:number;
  public recipe:Recipe=new Recipe();
  public message="";
  constructor(private rS:RecipeService ) { }
  
  ngOnInit() {
    
     this.GetRecipeById('69');
     console.log("this.recipeid: "+this.userid);
     
     
    
  }


  

  GetRecipeById(recipeId:string){
   
    
    this.rS.getRecipeById(recipeId).subscribe( w => {
      
        this.recipe=new Recipe;
        this.recipe = w;
        this.rS.updateRecipeViewsCounter(w.id).subscribe(
          () => {this.message = 'Recipe updated!'; },
          () => {this.message = '400 - BAD REQUEST!'; }
          );
       

        


      
    });
    

  }

}
