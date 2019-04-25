import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-galleria',
  templateUrl: './recipe-galleria.component.html',
  styleUrls: ['./recipe-galleria.component.css']
})
export class RecipeGalleriaComponent implements OnInit {
  
  @Input() image:string;
 
  
  constructor() { }
  
  ngOnInit() {
   
  }

}
