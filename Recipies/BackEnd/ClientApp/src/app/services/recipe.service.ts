import { Category } from './../models/category';
import { Country } from './../models/country';
import { EditRecipe } from './../models/edit-recipe.viewmodel';
import { map } from 'rxjs/operators';

import { RecipeModel } from '../models/recipe-model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = HOST_URL;
  recipies: Observable<Recipe[]>;
  constructor(private http: HttpClient, private aS: AuthenticationService) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(HOST_URL + '/api/Recipe/getCategories');
  }

  getCountries(): Observable<Category[]> {
    return this.http.get<Country[]>(HOST_URL + '/api/Recipe/getCountries');
  }
  getRecipeById(id) {
    return this.http.get<Recipe>(HOST_URL + '/api/Recipe/getRecipeById?RecipeId=' + id);
  }

  editRecipe(model: EditRecipe) {
    return this.http.post(HOST_URL + '/api/Recipe/EditRecipe' , model);
  }

  // all?category=1&name=shit&page=1&sortOrder=1
   
  getAllRecipies(
    page: number,
    category?: number,
    country?: number,
    search?: string,
    sortOrder?: number
  ): Observable<Recipe[]> {
    let optionalUrl = '';
    if (search != null && search !== '') {
      optionalUrl += '&name=' + search;
    }
    if (category != null) {
      optionalUrl += '&category=' + category;
    }
    if (sortOrder != null) {
      optionalUrl += '&country=' + country;
    }
    if (sortOrder != null) {
      optionalUrl += '&sortOrder=' + sortOrder;
    }

    const finishUrl = HOST_URL + '/api/Recipe/all?page=' + page + optionalUrl;
    return this.http.get(finishUrl).pipe(
      map(res => {
        const data = res['recipes'];
        return data;
      })
    );
  }
  getMyRecipes():Observable<Recipe[]> {
   // model.uid =this.aS.currentUserValue.id;  model:RecipeModel
    return this.http.get<Recipe[]>(this.url+'/api/Recipe/getMyRecipes')
 }
  CreateRecipe(model: RecipeModel): Observable<any> {
    model.uid = this.aS.currentUserValue.id;
    return this.http.post(HOST_URL + '/api/Recipe/CreateRecipe', model);
  }


  deleteRecipe(id: number) {
   return this.http.delete(this.url + '/api/Recipe/' + id);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe} from '../models/recipe';
import { HOST_URL } from '../../app/config';


