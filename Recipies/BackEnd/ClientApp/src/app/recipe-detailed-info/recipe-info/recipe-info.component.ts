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
  public Ingradients:string[];
  constructor() {
    // private Rs:RecipeService,private RecipeId:string
   }
  
  ngOnInit() {
   //this.recipe=this.Rs.getRecipeById(this.RecipeId);
   this.Ingradients=[];
   this.Ingradients.push('Cornflour 1/2 Cups');
   this.Ingradients.push('Sugar 1 Cups');
   this.Ingradients.push('Cardomom Powder 1/2 Tsp');
   this.Ingradients.push('Some Cashew Nuts 2 Tbsp');
   this.Ingradients.push('Orange Food Colour 1 Pinch');
   this.Ingradients.push('Lemon Juice 2 Tsp');
   this.Ingradients.push('Ghee 1/2 Bowls');
   this.Ingradients.push('Water 1/2 Bowls');
  
  }
  
  }






