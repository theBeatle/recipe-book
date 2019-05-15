import { Component, Input,  OnInit ,EventEmitter,Output} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { rS } from '@angular/core/src/render3';
import {RecipeRatingModel} from 'src/app/models/reciperating-model'
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  message:string;
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;
  model:RecipeRatingModel;
 
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
 
  constructor(private recipeService:RecipeService) {}

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
   

    this.model=new RecipeRatingModel();
    this.model.CountStar=this.rating;
    this.model.RecipeId=this.itemId;

   this.recipeService.UpdateRecipeRating(this.model).subscribe(
    () => {this.message = 'Recipe updated!'; },
    () => {this.message = '400 - BAD REQUEST!'; }
    );

     

}

}






