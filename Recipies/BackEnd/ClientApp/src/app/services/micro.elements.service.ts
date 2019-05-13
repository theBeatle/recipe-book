import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MicroElement } from '../models/micro.element';
import { HOST_URL } from '../../app/config';


@Injectable({
    providedIn: 'root'
  })
export class MicroElementsService {
  url = HOST_URL;
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    constructor(private http: HttpClient) { }

  getAllMicroElements(): Observable<MicroElement[]> {
    return this.http.get<MicroElement[]>(this.url + '/api/Ingredient/getAllMicroElements');

  }
  

  }
