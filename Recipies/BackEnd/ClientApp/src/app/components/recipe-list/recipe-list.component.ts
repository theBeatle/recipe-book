import { Category } from './../../models/category';
import { Country } from './../../models/country';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { SortTypes } from '../../enums/sortTypes'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  loading = true;
  recipies: Recipe[] = [];
  page = 1;
  categories: Category[];
  countries: Country[];

  selectedCategory: Category | string;
  selectedCountry: Country;
  selectedSort = SortTypes.Topic;
  search: string;

  sorting = SortTypes;
  keys = Object.keys(this.sorting).filter(f => !isNaN(Number(f)));

  constructor(private rS: RecipeService) {}

  fetchAllRecipies() {
    this.rS.getAllRecipies(this.page).subscribe(
      res => {
        this.recipies = this.recipies.concat(res);
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }
  fetchRecipiesWithOptions() {
    let categId;

    if (this.selectedCategory === undefined) {
      categId = '';
    } else {
      categId = (<Category>this.selectedCategory).id;
    }

    this.rS
      .getAllRecipies(this.page, categId, this.search, this.selectedSort)
      .subscribe(
        res => {
          this.recipies = this.recipies.concat(res);
          this.loading = false;
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  ngOnInit() {
    // Init selects
    this.rS.getCategories().subscribe(res => (this.categories = res));

    this.rS.getCountries().subscribe(res => (this.countries = res));
    this.fetchAllRecipies();
  }
  onChange() {
    this.recipies = [];
    this.page = 1;
    this.fetchRecipiesWithOptions();
  }
  onScroll() {
    this.page += 1;

    this.fetchRecipiesWithOptions();
  }
}
