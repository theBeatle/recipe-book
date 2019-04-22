import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  
  
  recipe:Observable<Recipe>;
  constructor() {
    // private Rs:RecipeService,private RecipeId:string
   }
  
  ngOnInit() {
   //this.recipe=this.Rs.getRecipeById(this.RecipeId);
  }
  
  }






