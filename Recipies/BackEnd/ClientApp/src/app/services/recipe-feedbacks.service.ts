import { Injectable } from '@angular/core';
import { FeedbackRecipe } from './../models/feedback-recipe';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HOST_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class RecipeFeedbacksService {
  constructor(private AuthS: AuthenticationService, private http: HttpClient) { }
  GetFeedBacks(id: number): Observable<FeedbackRecipe[]> {
    return this.http.get<FeedbackRecipe[]>(HOST_URL + '/api/RecipeFeedBacks/GetComments/' + id);
  }
  SendFeedBack(text: string, rid: number) {
    const body = {text: text, uid: this.AuthS.currentUserValue.id, rid: rid };
    this.http.post(HOST_URL + '/api/RecipeFeedBacks/PostComment', body ).subscribe((x) => {
     console.log('ok');
    });
  }
}
