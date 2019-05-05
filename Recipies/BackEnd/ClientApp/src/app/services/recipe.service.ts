import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe'
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  
  url = HOST_URL;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  recipe:Recipe;
  constructor( private http: HttpClient) { }

  getRecipeById(RecipeId:string): Observable<Recipe> {
    
    return this.http.get<Recipe>(this.url + '/api/Recipie/' + RecipeId);
  
  }


 
}
