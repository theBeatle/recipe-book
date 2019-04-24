import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  
  public recipestr:string="fsdafsdfdsfsdf";
  public recipe:Recipe;
  constructor(private rS:RecipeService) {  }
  
  ngOnInit() {
    this.GetRecipeById('1');
   
  }


  GetRecipeById(recipeId:string){
    this.recipe=new Recipe;
    this.recipestr='';
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
    
    });

  }


 
}




