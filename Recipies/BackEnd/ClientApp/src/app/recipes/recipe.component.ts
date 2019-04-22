import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

                                                                                                     
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  allRecipes: Observable<Recipe[]>;

  message=null;

  constructor( private iS: RecipeService) { }

  ngOnInit() {
    
    this.loadAllRecipes();
  }

  loadAllRecipes() {
    this.allRecipes = this.iS.getAllRecipes();
  }
  deleteRecipe(workerId: string) {
    // if (confirm('Are you sure you want to delete this ?')) {
    //   this.iS.deleteWorkerById(workerId).subscribe(() => {
    //     this.message = 'Record Deleted Succefully';
    //     this.loadAllRecipes();
    //   });
    // }
  }
}                                   