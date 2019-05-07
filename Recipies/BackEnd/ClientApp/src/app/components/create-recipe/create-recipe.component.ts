import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from './../../services/recipe.service';
import { Category } from './../../models/category';
import { Country } from './../../models/country';
import { RecipeModel } from './../../models/recipe-model';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  CategoryList: Category[];
  CountryList: Country[];
  messege: string;
  constructor(private fb: FormBuilder, private recipe: RecipeService) {
    this.recipeForm = this.fb.group({
      topic: ['', Validators.required],
      description: ['', Validators.required],
      cookingProcess: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
    });
   }

  ngOnInit() {
    this.recipe.getCategories().subscribe((data) => {
      this.CategoryList = data;
    });
    this.recipe.getCountries().subscribe((data) => {
      this.CountryList = data;
    });
  }
  get f() { return this.recipeForm.controls; }
  onSubmit() {
    const model = this.recipeForm.value;
    this.recipe.CreateRecipe(model as RecipeModel).subscribe(
    () => {this.messege = 'Recipe Created!'; },
    () => {this.messege = '400 - BAD REQUEST!'; }
    );
    this.recipeForm.reset();
    if (this.messege != null) {
    //    $('#element').toast('show');
    }
  }

}
