import { Injectable } from '@angular/core';
import { FeedbackRecipe } from './../models/feedback-recipe';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeFeedbacksService {
  FeedBacks: Array<FeedbackRecipe> = [{Ava: 'None', LastName: 'Last', FirstName: 'First', Text: 'Text', Time: '01.01.01'}, ];
  constructor(private AuthS: AuthenticationService) { }
  GetFeedBacks(): Array<FeedbackRecipe> {
    this.FeedBacks.push({Ava: 'None', LastName: '123', FirstName: '321', Text: 'BlaBla', Time: '01.01.01'});
    return this.FeedBacks;
  }
  SendFeedBack(text: string) {
    console.log('text: ' + text + 'UID: ' + this.AuthS.currentUserValue.id);
  }
}
