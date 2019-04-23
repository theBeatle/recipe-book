import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-recipe-directions',
  templateUrl: './recipe-directions.component.html',
  styleUrls: ['./recipe-directions.component.css']
})
export class RecipeDirectionsComponent implements OnInit {


  @Input() Directions: string[];

  constructor() { }

  ngOnInit() {
    
  }

}
