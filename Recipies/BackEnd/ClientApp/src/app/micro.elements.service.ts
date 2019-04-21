import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MicroElement } from './micro.element';

@Injectable({
    providedIn: 'root'
  })
  export class MicroElementsService {
    url = 'http://localhost:4200/Api/MicroElements';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    constructor(private http: HttpClient) { }

  getAllMicroElements(): Observable<MicroElement[]> {
    return this.http.get<MicroElement[]>(this.url + '/ReadAllMicroElementsInfo');
  }
  

  }
