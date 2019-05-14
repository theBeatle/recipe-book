import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeModel } from '../models/recipe-model';

                                                                                                     
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {
  
  
  recipe: Recipe=new Recipe();
  recipes:Recipe[]=[];
  // allRecipes: Observable<Recipe[]>;

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.loadMyRecipes();
  }
    
  loadMyRecipes() {
     this.recipeService.getRecipes()
    .subscribe((data: Recipe[]) => {this.recipes = data; console.log(data)});
    }
  
    deleteRecipe (event) {
    let id = event.target.getAttribute('id');
    console.log("Checking passed item: ",event.target.getAttribute('id'));
    console.log("Checking passed item: ",event.target);
    this.recipeService.deleteRecipe(id)
         .subscribe(data => this.loadMyRecipes());

 }
  
}                                   
