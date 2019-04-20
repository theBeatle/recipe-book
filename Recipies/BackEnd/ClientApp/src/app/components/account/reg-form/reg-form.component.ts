import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../../services/registration.service';
import { UserRegistration } from '../../../models/user.registration';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private cS: RegistrationService, ) { }

  ngOnInit() {
    this.userForm=this.fb.group({
      Email: [''],
      Password: [''],
      FirstName: [''],
      LastName: [''],

    })
  }
  onFormSubmit() {

    const contact = this.userForm.value;
    this.CreateUser(contact as UserRegistration);
    this.userForm.reset();
  }
  CreateUser(user: UserRegistration) {

      this.cS.register(user).subscribe(
        () => {

          console.log("OK");

          this.userForm.reset();
        }
      );


  }
}
