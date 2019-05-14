import { Category } from './../models/category';
import { Country } from './../models/country';

import { map, count } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';
import { RecipeModel } from '../models/recipe-model';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  
  url = HOST_URL;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  recipe:Recipe;
  

  constructor(private http: HttpClient, private aS: AuthenticationService) {}

  getRecipeById(RecipeId:string): Observable<Recipe> {
    
    return this.http.get<Recipe>(this.url + '/api/Recipie/ReadRecipeById?RecipeId=' + RecipeId);
  
  }

  


  updateRecipeViewsCounter(RecipeId:number): Observable<any> {
    
  
   
  return this.http.get( this.url+'/api/Recipie/UpdateRecipeViewsCounter?id='+RecipeId.toString()+'&userId='+this.aS.currentUserValue.id);
  
   
  
  }



  UpdateRecipeRating(RecipeId:number,countstars:number):Observable<any>{
    console.log("recipeid: "+RecipeId);
    return this.http.post(this.url+'/api/Recipie/UpdateRecipeRating?countstars='+countstars,RecipeId);
  }



  recipies: Observable<Recipe[]>;
  

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
  CreateRecipe(model: RecipeModel): Observable<any> {
    model.uid = this.aS.currentUserValue.id;
    return this.http.post(HOST_URL + '/api/Recipe/CreateRecipe', model);
  }
}
