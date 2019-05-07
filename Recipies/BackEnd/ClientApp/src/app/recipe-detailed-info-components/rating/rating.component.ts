import { Component, Input,  OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number ;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();



  rate(index: number) {
    this.rating=index;
    this.ratingChange.emit(this.rating);
 }



 isAboveRating(index: number): boolean {
  return index>this.rating;
}



getColor(index: number) {
  
}
  ngOnInit() {


}
}



enum Colors{
  GREY="#E0E0E0",
  GREEN="#76FF03",
  YELLOW="#FFCA28",
  RED="#DD2C00"

}


