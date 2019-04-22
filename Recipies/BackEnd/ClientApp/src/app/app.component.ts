import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes: Array<Recipe>;
  statusMessage: string;


  constructor(private serv: RecipeService) {
    this.recipes = new Array<Recipe>();
  }
  private loadRecipes() {
    this.serv.getAllRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }
  
  deleteRecipe(recipe: Recipe) {
   // this.serv.deleteRecipe(recipe.Id).subscribe(data => {
      this.statusMessage = 'Delete',
        this.loadRecipes();
   // });
 }
}
