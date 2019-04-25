import { TestAuthService } from '../../services/test-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private test: TestAuthService) {}


  ngOnInit(): void {
    this.test.getData();
  }

}
