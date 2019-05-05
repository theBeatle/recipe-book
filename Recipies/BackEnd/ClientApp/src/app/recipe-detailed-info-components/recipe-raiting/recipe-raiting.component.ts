import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-raiting',
  templateUrl: './recipe-raiting.component.html',
  styleUrls: ['./recipe-raiting.component.css']
})
export class RecipeRaitingComponent implements OnInit {


  @Input() rating:any;
  constructor() { }

  ngOnInit() {
  }

}
