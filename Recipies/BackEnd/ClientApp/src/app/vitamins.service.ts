import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vitamin} from './vitamin';

@Injectable({
    providedIn: 'root'
  })
  export class VitaminsService {
    url = 'http://localhost:4200/Api/Vitamins';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    constructor(private http: HttpClient) { }

  getAllVitamins(): Observable<Vitamin[]> {
    return this.http.get<Vitamin[]>(this.url + '/ReadAllVitaminsInfo');
  }
  

  }
