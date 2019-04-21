import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient} from './Ingredient';

@Injectable({
    providedIn: 'root'
  })
  export class IngredientsService {
    url = 'http://localhost:4200/Api/Ingredients';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    constructor(private http: HttpClient) { }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url + '/ReadAllIngredientsInfo');
  }
  

  }
