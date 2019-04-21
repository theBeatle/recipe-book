import { Component, OnInit } from '@angular/core';
import { DataEditService } from '../data-edit.service';


@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  myUploader(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}