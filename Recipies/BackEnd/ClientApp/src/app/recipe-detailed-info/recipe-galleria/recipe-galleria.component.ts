import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-galleria',
  templateUrl: './recipe-galleria.component.html',
  styleUrls: ['./recipe-galleria.component.css']
})
export class RecipeGalleriaComponent implements OnInit {
  
  public image:string;
 
  
  constructor() { }
  
  ngOnInit() {
    this.image="https://www.whiskaffair.com/wp-content/uploads/2015/06/Chettinad-pepper-Chicken-4.jpg";
  }

}
