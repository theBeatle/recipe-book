import { Component ,OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../ingredient';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  
  allIngredients: Observable<Ingredient[]>;
  

  constructor( private iS: IngredientsService) { }

  ngOnInit() {
    
    this.loadAllIngredients();
  }

  loadAllIngredients() {
    this.allIngredients = this.iS.getAllIngredients();
  }

}