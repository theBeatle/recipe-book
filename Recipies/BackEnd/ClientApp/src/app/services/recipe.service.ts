import { Category } from './../models/category';
import { Country } from './../models/country';

import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  
  url = HOST_URL;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  recipe:Recipe;
  uS:UsersService;


  getRecipeById(RecipeId:string): Observable<Recipe> {
    
    return this.http.get<Recipe>(this.url + '/api/Recipie/ReadRecipeById?RecipeId=' + RecipeId);
  
  }



  updateRecipeViewsCounter(RecipeId:string): void {
    
  this.http.post(this.url+'/api/Recipie/UpdateRecipeViewsCounter?id='+ RecipeId,this.uS.GetAuthUser()); 
  
  }

  recipies: Observable<Recipe[]>;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(HOST_URL + '/api/Recipe/getCategories');
  }

  getCountries(): Observable<Category[]> {
    return this.http.get<Country[]>(HOST_URL + '/api/Recipe/getCountries');
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
}
