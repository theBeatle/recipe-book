import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe} from '../models/recipe';
import { HOST_URL } from '../../app/config';

@Injectable()
export class RecipeService {

  url = HOST_URL;
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  
  constructor(private http: HttpClient) { }

  getRecipes():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url+'/api/Recipe/getRecipes')
  }

  deleteRecipe(id: number) {
   return this.http.delete(this.url + '/api/Recipe/' + id);
  }
}
