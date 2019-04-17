import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { CredentialsModel } from './../../models/credentials-model';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private Auth: AuthenticationService) { }

  ngOnInit() {
    this.SignIn('istep.andriy@gmail.com', 'Pass*1');
  }

  SignIn(Email: string, Password: string) {
    this.Auth.login({Email, Password} as CredentialsModel).subscribe((data) => {
        console.log(data);
    });
  }

}
