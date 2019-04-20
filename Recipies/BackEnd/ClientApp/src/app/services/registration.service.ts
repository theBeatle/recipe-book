import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';
import { UserRegistration } from '../models/user.registration';




@Injectable({ providedIn: 'root' })
export class RegistrationService  {
  url = HOST_URL;


  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  register(user: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(this.url + '/api/Registration/registration/', user, this.httpOptions);
  }

}
