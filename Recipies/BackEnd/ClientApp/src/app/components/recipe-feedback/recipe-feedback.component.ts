import { Component, OnInit,Input } from '@angular/core';
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

  @Input() recipeId: number;
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
    this.fS.GetFeedBacks(this.recipeId).subscribe((x) => {
        this.FeedBacks = x;
    });
    this.FeedBackForm = this.fb.group({
     Text: ['', [Validators.required]],
    });
  }
  SendFeedBack() {
    const value = this.FeedBackForm.value;
    this.fS.SendFeedBack(value.Text,this.recipeId ).subscribe( _ => {
      this.FeedBackForm.reset();
      this.fS.GetFeedBacks(this.recipeId).subscribe((x) => {
        this.FeedBacks = x;
    });
   
  },_ => {
    this.FeedBackForm.reset();
    this.fS.GetFeedBacks(this.recipeId).subscribe((x) => {
      this.FeedBacks = x;
  })} );
  }
}
