import { Component, OnInit } from '@angular/core';
import { RecipeFeedbacksService } from './../../services/recipe-feedbacks.service';
import { FeedbackRecipe } from 'src/app/models/feedback-recipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-recipe-feedback',
  templateUrl: './recipe-feedback.component.html',
  styleUrls: ['./recipe-feedback.component.css']
})
export class RecipeFeedbackComponent implements OnInit {
  FeedBacks: Array<FeedbackRecipe> = [];
  FeedBackForm: FormGroup;
  isAuth: boolean;
  constructor(private fS: RecipeFeedbacksService, private AuthS: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.AuthS.currentUser.subscribe((x) => {
      if (x != null) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
      console.log(this.isAuth);
    });
    this.fS.GetFeedBacks(1).subscribe((x) => {
        this.FeedBacks = x;
    });
    this.FeedBackForm = this.fb.group({
     Text: ['', [Validators.required]],
    });
  }
  SendFeedBack() {
    const value = this.FeedBackForm.value;
    this.fS.SendFeedBack(value.Text, 1);
    this.FeedBackForm.reset();
    this.fS.GetFeedBacks(1).subscribe((x) => {
      this.FeedBacks = x;
  });
  }
}
