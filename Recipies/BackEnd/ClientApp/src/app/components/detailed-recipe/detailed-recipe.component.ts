import { Component, OnInit } from '@angular/core';
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
  constructor(private rS:RecipeService) {  }
  
  ngOnInit() {
    this.GetRecipeById('1');
   
  }


  GetRecipeById(recipeId:string){
    this.recipe=new Recipe;
    this.rS.getRecipeById(recipeId).subscribe( w => {
     this.recipe.category=w.category;
     this.recipe.cookingProcess= w.cookingProcess;
     this.recipe.country=w.country;
     this.recipe.creationDate=w.creationDate;
     this.recipe.description=w.description;
     this.recipe.raiting=w.raiting;
     this.recipe.topic=w.topic;
     this.recipe.viewsCounter=w.viewsCounter;
     console.log(w.topic);
     console.log(w.cookingProcess);
    
    });
  }

}
