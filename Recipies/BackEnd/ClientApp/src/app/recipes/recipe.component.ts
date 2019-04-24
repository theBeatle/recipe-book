import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

                                                                                                     
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {
  
  
  recipe: Recipe=new Recipe();
  recipes:Recipe[];
  // allRecipes: Observable<Recipe[]>;

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.loadRecipes();
  }
    
  loadRecipes() {
    this.recipeService.getRecipes()
    .subscribe((data: Recipe[]) => this.recipes = data);
    }
  
  deleteRecipe(p: Recipe) {
    this.recipeService.deleteRecipe(p.Id)
        .subscribe(data => this.loadRecipes());

 }
  
}                                   

// /api/Recipe/GetRecipes