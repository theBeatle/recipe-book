import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';
import { Ingredient} from '../models/ingredient';

@Injectable({
    providedIn: 'root'
  })
  export class IngredientsService {
    url = HOST_URL;
    constructor(private http: HttpClient) { }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url + '/api/Ingredient/getAllIngredients');
  }
  

  }
