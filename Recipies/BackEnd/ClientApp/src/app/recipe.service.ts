import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {

  private url = "http://localhost:64269/api/recipes/";
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.url);
  }

  deleteRecipe(id: Int32Array) {
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url, { params: urlParams });
  }
}
