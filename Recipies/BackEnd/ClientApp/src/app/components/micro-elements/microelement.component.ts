import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { MicroElement } from '../../models/micro.element';
import {MicroElementsService} from '../../services/micro.elements.service';


@Component({
  selector: 'app-microelement',
  templateUrl: './microelement.component.html',
  styleUrls: ['./microelement.component.css']
})
export class MicroElementComponent implements OnInit {
    allMicroElements: MicroElement[]=[];
    constructor( private meS: MicroElementsService) { }
    ngOnInit() {
      this.loadAllMicroElements();
    }
    loadAllMicroElements() {
      this.meS.getAllMicroElements()
      .subscribe((data: MicroElement[]=[]) => {this.allMicroElements = data; console.log(data)});
      }
}
