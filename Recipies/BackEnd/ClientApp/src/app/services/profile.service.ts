import { User } from './../models/user';
import { HOST_URL } from './../config';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  getUserInfo(): Observable<User> {
     return this.http.get<User>(HOST_URL + '/api/Users/GetUserById/' + this.aS.currentUserValue.id);
  }
}
