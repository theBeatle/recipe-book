import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserRegistration } from '../../models/user.registration';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private cS: UserService, ) { }

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
