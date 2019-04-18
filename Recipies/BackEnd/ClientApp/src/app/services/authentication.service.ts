import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { CredentialsModel } from '../models/credentials-model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    private currentUserSubject: BehaviorSubject<Object>;
    public currentUser: Observable<Object>;

    private ApiUrl = 'http://localhost:5000/api';
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Object>(JSON.parse(localStorage.getItem('access_token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Object {
        return this.currentUserSubject.value;
    }

    GetUID(): string {
        return localStorage.getItem('user_id');
    }

    login(data: CredentialsModel) {
        return this.http.post<any>(`${this.ApiUrl}/Auth/login`, data, this.httpOptions).subscribe((x) => {
          localStorage.setItem('access_token', JSON.stringify(x.auth_token));
          localStorage.setItem('user_id', JSON.stringify(x.id));
        });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        this.currentUserSubject.next(null);
    }
}
