import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  
  
  public recipe:Recipe;
  constructor( private rS:RecipeService,private RecipeId:number) {
    
   }
  
  ngOnInit() {
   this.GetRecipeById('1');
   
  }


  GetRecipeById(RecipeId:string){
    this.rS.getRecipeById(RecipeId).subscribe( w => {
     this.recipe.Category=w.Category;
     this.recipe.CookingProcess=w.CookingProcess;
     this.recipe.Country=w.Country;
     this.recipe.CreationDate=w.CreationDate;
     this.recipe.Description=w.Description;
     this.recipe.Raiting=w.Raiting;
     this.recipe.Topic=w.Topic;
     this.recipe.ViewsCounter=w.ViewsCounter;
    });
  }
  
  }






