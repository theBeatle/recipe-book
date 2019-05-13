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

  id: number;
  topic: string;
  category: Category;
  country: Country;
  description: string;
  cookProc: string;

  constructor(private rS: RecipeService,private router: Router) {}

  ngOnInit() {
    // Init selects
    this.oldRecipe = new Recipe();
    this.rS.getCategories().subscribe(res => (this.categories = res));
    this.rS.getCountries().subscribe(res => (this.countries = res));
      this.rS.getRecipeById(59).subscribe(res => {
      this.oldRecipe = res;
      this.topic = res.topic;
      this.id = res.id;
      this.category = this.categories.find(s => s.name === res.categoryName);
      this.country = this.countries.find(s => s.name === res.countryName);
      this.cookProc = res.cookingProcess;
      this.description = res.description;

    });
  }
  clearClick() {
    this.topic = '';
      this.category = undefined;
      this.country = undefined;
      this.cookProc = '';
      this.description = '';
  }

  defaultClick() {
    this.topic = this.oldRecipe.topic;
      this.id = this.oldRecipe.id;
      this.category = this.categories.find(s => s.name === this.oldRecipe.categoryName);
      this.country = this.countries.find(s => s.name === this.oldRecipe.countryName);
      this.cookProc = this.oldRecipe.cookingProcess;
      this.description = this.oldRecipe.description;
  }
  modifyClick() {
    this.newRecipe = new EditRecipe();
    this.newRecipe.id = this.id;
    this.newRecipe.topic = this.topic;
    this.newRecipe.category = this.category.name;
    this.newRecipe.country = this.country.name;
    this.newRecipe.cookingProcess = this.cookProc;
    this.newRecipe.description = this.description;

    console.log(this.newRecipe);
    this.rS.editRecipe(this.newRecipe).subscribe(
      data => {
          this.router.navigate(['/home']);
      });

  }
}
