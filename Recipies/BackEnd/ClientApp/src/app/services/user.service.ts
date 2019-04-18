import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRegistration } from '../models/user.registration';




@Injectable()
export class UserService  {
  url = 'http://localhost:44322/api';


  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  register(user: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(this.url + '/Accounts/', user, this.httpOptions);
  }

}
