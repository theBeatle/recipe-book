import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_URL } from '../../app/config';
import { HttpHeaders } from '@angular/common/http';
import { UserEditData } from '../models/user-data-edit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEditService {
  url = HOST_URL;

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient){ }

  update(user: UserEditData): Observable<UserEditData>{
    console.log(user);

    return this.http.put<UserEditData>(this.url + '/api/UserDataEdit/update/', user, this.httpOptions);
  }

}