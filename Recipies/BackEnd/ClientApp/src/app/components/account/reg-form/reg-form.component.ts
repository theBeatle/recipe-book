import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../../services/registration.service';
import { UserRegistration } from '../../../models/user.registration';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  constructor(private fb: FormBuilder,
     private cS: RegistrationService,
     private router: Router,
      ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
    }
    );
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }

  this.loading = true;
    const contact = this.userForm.value;
    this.CreateUser(contact as UserRegistration);

  }
  get f() { return this.userForm.controls; }
  CreateUser(user: UserRegistration) {

      this.cS.register(user).subscribe(
        () => {

          this.loading = false;
          this.router.navigate(['/login']);
        }
      );


  }
}
