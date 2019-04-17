import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { CredentialsModel } from '../models/credentials-model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private ApiUrl = 'http://localhost:5000/api';
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('Token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(data: CredentialsModel) {
        return this.http.post<any>(`${this.ApiUrl}/Auth/login`, data, this.httpOptions).subscribe((x) => {
          localStorage.setItem('Token', JSON.stringify(x.auth_token));
        });
           /* .pipe(map(user => {
                if (user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                    this.currentUserSubject.next(user);
                }
                return user;
            })); */
    }

    logout() {
        localStorage.removeItem('Token');
        this.currentUserSubject.next(null);
    }
}
