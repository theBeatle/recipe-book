import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable  } from 'rxjs';
import {UsersService} from '../../services/users.service'
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isAuthorized: boolean;
  fullName: string ;
  constructor(
    private usersService: UsersService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {

    this.authenticationService.currentUser.subscribe((x) => {
      if (x != null) {
            this.isAuthorized = true;
          } else {
            this.isAuthorized = false;
          }
        });

  //console.log(this.authenticationService.currentUserValue);
  this.usersService.GetAuthUser().subscribe((x) => {
   //console.log(x);
    this.fullName = x.firstName + ' ' + x.lastName;
  });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
