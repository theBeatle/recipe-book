import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitamin } from '../../models/vitamin'
import { VitaminsService } from '../../services/vitamins.service';

@Component({
  selector: 'app-vitamin',
  templateUrl: './vitamin.component.html',
  styleUrls: ['./vitamin.component.css'],
  providers : [VitaminsService]
})
export class VitaminComponent {
  allVitamins: Vitamin[]=[];
  

  constructor( private vS: VitaminsService) { }

  ngOnInit() {
    
    this.loadAllVitamins();
  }

  loadAllVitamins() {
   // this.allVitamins = this.vS.getAllVitamins();
    this.vS.getAllVitamins()
     .subscribe((data: Vitamin[]) => {this.allVitamins = data; console.log(data)});
  }

}
