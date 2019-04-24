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
  
  
  public recipe:Observable<Recipe>;
  constructor() {
    // private Rs:RecipeService,private RecipeId
   }
  
  ngOnInit() {
   //this.recipe=this.Rs.getRecipeById(this.RecipeId);
   
  }
  
  }






