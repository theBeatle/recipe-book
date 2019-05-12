import { Component ,OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../models/ingredient';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers:[IngredientsService]
  
})
export class IngredientComponent implements OnInit {
  
  allIngredients: Ingredient[]=[];
  
  

  constructor( private iS: IngredientsService) { }

  ngOnInit() {
    
    this.loadAllIngredients();
  }

  loadAllIngredients() {
 
     this.iS.getAllIngredients()
     .subscribe((data: Ingredient[]) => {this.allIngredients = data; console.log(data)});
    }
  
    
  }


