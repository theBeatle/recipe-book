import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestAuthService {

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:5000/api/Test').subscribe((x) => {
      console.log(x);
    });


  }
}
