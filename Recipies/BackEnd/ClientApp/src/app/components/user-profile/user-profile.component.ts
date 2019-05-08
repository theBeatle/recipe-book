import { Recipe } from './../../models/recipe';
import { User } from './../../models/user';
import { ProfileService } from './../../services/profile.service';
import {Component, OnInit} from '@angular/core/';





@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
 user: User = new User();
 myRecipes: Recipe[] = [];
 constructor(private pS: ProfileService) {}
 ngOnInit() {
  this.pS.getUserInfo().subscribe((x) => {
    this.user = x as User;
  });
  this.pS.getRecipes().subscribe((x) => {
    this.myRecipes = x;
  });
}
}



