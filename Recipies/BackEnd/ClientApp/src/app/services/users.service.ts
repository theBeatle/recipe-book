import { Observable } from 'rxjs';
import { HOST_URL } from './../config';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: Observable<User> = new Observable<User>();
  constructor(private http: HttpClient, private auth: AuthenticationService) { }
  GetAuthUser() {
    this.user = this.http.get<User>(HOST_URL + '/api/Users/GetUserById/' + this.auth.currentUserValue.id);
    return this.user;
  }
}
