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
    allMicroElements: Observable<MicroElement[]>;
    constructor( private meS: MicroElementsService) { }
    ngOnInit() {

    }
    loadAllIngredients() {
        this.allMicroElements = this.meS.getAllMicroElements();
      }
}
