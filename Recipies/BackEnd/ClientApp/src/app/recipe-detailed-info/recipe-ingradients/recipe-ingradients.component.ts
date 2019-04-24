import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingradients',
  templateUrl: './recipe-ingradients.component.html',
  styleUrls: ['./recipe-ingradients.component.css']
})
export class RecipeIngradientsComponent implements OnInit {

  
  @Input() Ingradients:string[];
  constructor() { 
  }

  ngOnInit() {
    
  }

}
