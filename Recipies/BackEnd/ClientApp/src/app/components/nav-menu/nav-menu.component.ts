import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isAuthorized: boolean;
  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
console.log(this.authenticationService.currentUserValue);
    this.authenticationService.currentUser.subscribe((x)=>{
      if (x != null) {
        this.isAuthorized = true;
      } else {
        this.isAuthorized = false;
      }
    })

  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
