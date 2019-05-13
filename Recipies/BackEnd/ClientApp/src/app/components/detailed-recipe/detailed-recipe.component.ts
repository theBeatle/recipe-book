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
  
  public recipe:Recipe=new Recipe();
  public message="";
  constructor(private rS:RecipeService ) { }
  
  ngOnInit() {
    
     this.GetRecipeById('62');
    
     
    
  }


  

  GetRecipeById(recipeId:string){
   
    
    this.rS.getRecipeById(recipeId).subscribe( w => {
      
        this.recipe=new Recipe;
        this.recipe = w;
        console.log(this.recipe.user); // = new User();
        console.log(this.recipe.rating); // = new User();
        this.creationdate="";
        this.creationdate= w.creationDate.toString().substring(0,10);
       

        this.rS.updateRecipeViewsCounter(this.recipe.id).subscribe(
          () => {this.message = 'Recipe updated!'; },
          () => {this.message = '400 - BAD REQUEST!'; }
          );


      
    });
    

  }

}
