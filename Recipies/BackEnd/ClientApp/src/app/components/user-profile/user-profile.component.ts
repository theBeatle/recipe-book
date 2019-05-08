import { User } from './../../models/user';
import { ProfileService } from './../../services/profile.service';
import {Component, OnInit} from '@angular/core/';





@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
 user: User;
 constructor(private pS: ProfileService) {}
 ngOnInit() {
  this.pS.getUserInfo().subscribe((x) => {
    this.user = x as User;
  });
}
}



