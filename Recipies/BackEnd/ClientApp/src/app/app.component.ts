import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // recipes: Array<Recipe>;

  
}
