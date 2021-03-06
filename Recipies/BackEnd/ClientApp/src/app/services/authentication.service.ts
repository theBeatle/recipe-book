import { CredentialsModel } from './../models/credentials-model';
import { AuthUser } from './../models/auth-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HOST_URL, ADMIN_ROLE } from './../config';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<AuthUser>;
    public currentUser: Observable<AuthUser> = new Observable<AuthUser>();
    private APIUrl = HOST_URL;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        console.log(this.currentUserValue);
    }

    public get currentUserValue(): AuthUser {
        return this.currentUserSubject.value;
    }

    login(data: CredentialsModel) {
        return this.http.post<any>(`${this.APIUrl}/api/Auth/login`, data)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.auth_token) {

                    const token = JSON.stringify(user);

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', token);
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
    isAdmin() {
        this.http.get<Boolean>(`${this.APIUrl}/api/Roles/IsUserInRole?uid=${this.currentUserValue.id}&RoleName=${ADMIN_ROLE}`)
        .pipe(map(role => {
             console.log(role);
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
