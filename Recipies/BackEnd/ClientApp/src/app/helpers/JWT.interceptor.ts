import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;

        if (currentUser && currentUser.auth_token) {
         // alert(currentUser.auth_token);
          const token = currentUser.auth_token;
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`,
                }
            });
        }
      //  alert(JSON.stringify(request));

        return next.handle(request);
    }
}
