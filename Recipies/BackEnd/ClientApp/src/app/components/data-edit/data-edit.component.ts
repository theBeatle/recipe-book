import { Component, OnInit } from '@angular/core';
import { DataEditService } from '../../services/data-edit.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserEditData } from '../../models/user-data-edit'

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {

  UserEdit: FormGroup;
  submitted = false;

  constructor(private DES: DataEditService, private fb: FormBuilder,) { }

  ngOnInit() {
    this.UserEdit = this.fb.group({
      FirstName: new FormControl(['', Validators.required]),
      LastName: new FormControl(['', Validators.required]),
      NickName: new FormControl(['', Validators.required]),
      Password: new FormControl(['', Validators.required]),
      PasswordConfiramtion: new FormControl(['', Validators.required]),
      Email: new FormControl(['', Validators.required]),
      Age: new FormControl(['', Validators.required]),
      Image: new FormControl(['', Validators.required]),
      Country: new FormControl(['', Validators.required])
    });
  }

  UpdateUserData(){
    this.submitted = true;
    if(this.UserEdit.invalid){
      return;
    }
    const contact = this.UserEdit.value;
    this.UpdateUser(contact as UserEditData);
  }

  UpdateUser(user: UserEditData){
    this.DES.update(user).subscribe(
      () => { console.log('OK'); }
    );
  }

}
