import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';

@Component({
  selector: 'app-recipe-galleria',
  templateUrl: './recipe-galleria.component.html',
  styleUrls: ['./recipe-galleria.component.css']
})
export class RecipeGalleriaComponent implements OnInit {
  
  @Input() Images:Gallery[];
 
  
  constructor() { }
  
  ngOnInit() {
    
  }

}
