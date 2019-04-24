import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vitamin} from '../models/vitamin';
import { HOST_URL } from '../../app/config';

@Injectable({
    providedIn: 'root'
  })
export class VitaminsService {
  url = HOST_URL;
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    constructor(private http: HttpClient) { }

  getAllVitamins(): Observable<Vitamin[]> {
    return this.http.get<Vitamin[]>(this.url + '/api/Ingredient/getAllVitamins', this.httpOptions);

  
  }
  

  }
