import { Category } from './../../models/category';
import { Country } from './../../models/country';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { EditRecipe } from '../../models/edit-recipe.viewmodel';

import { SortTypes } from '../../enums/sortTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  providers: [RecipeService]
})
export class RecipeEditComponent implements OnInit {
  categories: Category[];
  countries: Country[];

  oldRecipe: Recipe;
  newRecipe: EditRecipe;

  topic: string;
  category: Category;
  country: Country;
  description: string;
  cookProc: string;

  constructor(private rS: RecipeService,private router: Router) {}

  ngOnInit() {
    // Init selects
    this.rS.getCategories().subscribe(res => (this.categories = res));
    this.rS.getCountries().subscribe(res => (this.countries = res));
    this.rS.getRecipeById(49).subscribe(res => {
      this.oldRecipe = res;
      this.topic = res.topic;
      this.category = this.categories.find(s => s.name === res.categoryName);
      this.country = this.countries.find(s => s.name === res.countryName);
      this.cookProc = res.cookingProcess;
      this.description = res.description;
    });
  }
  modifyClick() {
    this.newRecipe.topic = this.topic;
    this.newRecipe.category = this.category.name;
    this.newRecipe.country = this.country.name;
    this.newRecipe.cookingProcess = this.cookProc;
    this.newRecipe.description = this.description;

    this.rS.editRecipe(this.newRecipe).subscribe(
      data => {
          this.router.navigate(['/home']);
      });

  }
}
