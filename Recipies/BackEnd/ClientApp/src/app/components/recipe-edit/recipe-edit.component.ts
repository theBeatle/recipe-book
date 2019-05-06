import { Category } from './../../models/category';
import { Country } from './../../models/country';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { SortTypes } from '../../enums/sortTypes';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  providers: [RecipeService]
})
export class RecipeEditComponent implements OnInit {

  selectedCategory: Category | string;
  categories: Category[];
  countries: Country[];

  constructor(private rS: RecipeService) {}


  ngOnInit() {
 // Init selects
    this.rS.getCategories().subscribe(res => (this.categories = res));
    this.rS.getCountries().subscribe(res => (this.countries = res));
  }
}
