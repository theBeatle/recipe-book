import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../models/recipe';
import { User } from './../../models/user';
import { ProfileService } from './../../services/profile.service';
import {Component, OnInit} from '@angular/core/';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
 user: User = new User();
 myRecipes: Observable<Recipe[]>;
 constructor(private pS: ProfileService, private rS: RecipeService) {}
 ngOnInit() {
  this.pS.getUserInfo().subscribe((x) => {
    this.user = x as User;
  });
  this.getMyRecipes();

}
getMyRecipes() {
  this.myRecipes = this.pS.getRecipes();
}
deleteRecipe(id) {
  this.rS.deleteRecipe(id).subscribe(() => {
    this.getMyRecipes();
  });
}
}



