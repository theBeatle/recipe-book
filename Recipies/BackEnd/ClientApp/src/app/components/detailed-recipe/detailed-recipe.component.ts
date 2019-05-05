import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.css']
})
export class DetailedRecipeComponent implements OnInit {


  public recipe:Recipe;
  public creationdate:string;
  
  constructor(private rS:RecipeService) {  }
  
  ngOnInit() {
    this.GetRecipeById('1');
  
   
    
  }


  GetRecipeById(recipeId:string){
   
    
    this.rS.getRecipeById(recipeId).subscribe( w => {
        this.recipe = w;
        this.creationdate="";
        this.creationdate= w.creationDate.toString().substring(0,10);
       
    });
    

  }

}
