import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-recipe-directions',
  templateUrl: './recipe-directions.component.html',
  styleUrls: ['./recipe-directions.component.css']
})
export class RecipeDirectionsComponent implements OnInit {


  @Input() Directions: string;
  cookingprocess:string[];
  constructor() { }

  ngOnInit() {
   
   this.cookingprocess=this.ParsecookingProcess(this.Directions);
  }


  ParsecookingProcess(CookingProcess:string):Array<string>{
     
     let arr:Array<string>;
     arr = CookingProcess.split("|", 50);
     return arr;
}

}
