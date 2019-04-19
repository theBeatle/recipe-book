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
  LoginForm: FormGroup;
  constructor(private Auth: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      Email: ['', [Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  SignIn(Email: string, Password: string) {
    this.Auth.login({Email, Password} as CredentialsModel);
  }
  SubmitForm() {
    const data = this.LoginForm.value;
    this.Auth.login(data as CredentialsModel);
  }
}
