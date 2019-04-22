import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-galleria',
  templateUrl: './recipe-galleria.component.html',
  styleUrls: ['./recipe-galleria.component.css']
})
export class RecipeGalleriaComponent implements OnInit {
  
  public images: any[];
  
  constructor() { }
  
  ngOnInit() {
    this.images = [];
    this.images.push({source:'https://www.whiskaffair.com/wp-content/uploads/2015/06/Chettinad-pepper-Chicken-4.jpg', alt:'Description for Image 2', title:'Title 2',class:'col-g-8 col-md-10 col-lg-12'});
    this.images.push({source:'https://www.thespruceeats.com/thmb/vKFZrXWL8N2LOZy6bRb6rfikHKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/chettinadchicken-56a5108d5f9b58b7d0dabed6.jpg', alt:'Description for Image 3', title:'Title 3',class:'col-g-8 col-md-10 col-lg-12'});
    this.images.push({source:'http://glebekitchen.com/wp-content/uploads/2017/04/chettinadchickenhomecurrylow.jpg', alt:'Description for Image 2', title:'Title 2',class:'col-g-8 col-md-10 col-lg-12'});
    
  }

}
