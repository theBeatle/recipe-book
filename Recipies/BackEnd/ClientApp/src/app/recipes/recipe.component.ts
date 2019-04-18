import { Component ,OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import { RecipesService } from '../recipe.service';
import { Recipe } from '../recipe';

                                                                                                     
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  allRecipes: Observable<Recipe[]>;
  

  constructor( private iS: RecipesService) { }

  ngOnInit() {
    
    this.loadRecipes();
  }

  loadAllRecipes() {
    this.allRecipes = this.iS.getAllIRecipes();
  }

}                                   