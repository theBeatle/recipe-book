import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://localhost:';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http: HttpClient) { }


  getRecipeById(RecipeId:string):Observable<Recipe>{
    return this.http.get<Recipe>(this.url+''+RecipeId);
  }
}
