import { Category } from './../models/category';

import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = HOST_URL;
recipies: Observable<Recipe[]>;

  constructor(private http: HttpClient) { }

getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(HOST_URL + '/api/Recipe/getCategories' );
}

  getAllRecipies(page: number): Observable<Recipe[]>  {
    return  this.http.get(HOST_URL + '/api/Recipe/all?page=' + page )
    .pipe(map(res => {
        let data = res['recipes'];
        return data;

    }));
  }
}
