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
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],

    });
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
  CreateUser(user: UserRegistration) {

      this.cS.register(user).subscribe(
        () => {

          console.log("OK");

          this.router.navigate(['/login']);
        }
      );


  }
}
