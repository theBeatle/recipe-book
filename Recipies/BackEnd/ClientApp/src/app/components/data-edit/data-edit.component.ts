import { Component, OnInit, ViewChild } from '@angular/core';
import { DataEditService } from '../../services/data-edit.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserEditData } from '../../models/user-data-edit'
import { ElementRef } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {

  // @ViewChild('PasswordConfirmation') PasswordConfirmation:ElementRef;

  // @ViewChild('Age') Age:ElementRef;

  // @ViewChild('FileInput') FileInput:ElementRef;


  UserEdit: FormGroup;
  submitted = false;
  countries = new Array();
  user228: Observable<User>;

  constructor(private DES: DataEditService, private fb: FormBuilder, private US: UsersService) { }

  ngOnInit() {
    this.UserEdit = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      NickName: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', Validators.required],
      // Age: new FormControl(['', Validators.required]),
      // Image: new FormControl(['', Validators.required]),
      Country: ['', Validators.required]
    });
  }

  updateUserData(){
    // console.log(this.UserEdit.value); //.nativeElement.textContent);
    // console.log(this.PasswordConfirmation.nativeElement.textContent);
    console.log(this.UserEdit);
    this.submitted = true;
    if(this.UserEdit.invalid){
      return console.log('error');
    }
    // this.UserEdit.setValue({Age: this.Age.nativeElement.textContent});
    // this.UserEdit.setValue({Image: this.FileInput.nativeElement.files[0]});
    this.user228 = this.US.GetAuthUser();
    const contact = this.UserEdit.value;
    this.user228.subscribe(val => console.log(val));
    
    this.updateUser(contact as UserEditData);
  }

  updateUser(user: UserEditData){
    this.DES.update(user).subscribe(
      () => { console.log('OK'); }
    );
  }

}
