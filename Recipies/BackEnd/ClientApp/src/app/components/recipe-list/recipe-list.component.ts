import { Category } from './../../models/category';
import { Country } from './../../models/country';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { SortTypes } from '../../enums/sortTypes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  loading = true;
  test = null;
  page = 1;
  recipies: Recipe[] = [];
  categories: Category[];
  countries: Country[];
  sorting = SortTypes;
  keys = Object.keys(this.sorting).filter(f => !isNaN(Number(f)));


  selectedCategory: Category | string;
  selectedCountry: Country | string;
  selectedSort = SortTypes.Topic;
  search: string;
  imageToShow: any;

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}
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
    let countryId;

    if (this.selectedCategory === undefined) {
      categId = '';
    } else {
      categId = (<Category>this.selectedCategory).id;
    }
    if (this.selectedCountry === undefined) {
      countryId = '';
    } else {
      countryId = (<Country>this.selectedCountry).id;
    }

    this.rS
      .getAllRecipies(
        this.page,
        categId,
        countryId,
        this.search,
        this.selectedSort
      )
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
  clearClick() {
    this.page = 1;
    this.recipies = [];
    this.selectedCategory = undefined;
    this.selectedCountry = undefined;
    this.selectedSort = this.sorting.Topic;
    this.search = '';
    this.fetchAllRecipies();
  }
  onScroll() {
    this.page += 1;
    this.fetchRecipiesWithOptions();
  }
}
