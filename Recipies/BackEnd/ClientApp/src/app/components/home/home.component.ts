import { TestAuthService } from '../../services/test-auth.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private test: TestAuthService, private uS: UsersService, private aS: AuthenticationService ) {}


  ngOnInit(): void {
    this.test.getData();
    console.log(this.uS.GetAuthUser());
    this.aS.isAdmin();
  }

}
