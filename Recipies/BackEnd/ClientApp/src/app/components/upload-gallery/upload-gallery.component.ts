import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { GalleryService } from './../../services/gallery.service';

import { s } from '@angular/core/src/render3';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})
export class UploadGalleryComponent implements OnInit {

  public progress: number;
  public message: string;
  public photos: Gallery[];

  @Input('recipeId') recipeId: number;


  @Output() public OnUploadFinished = new EventEmitter();

  constructor(private http: HttpClient, private gS: GalleryService) { }

  ngOnInit() {
    console.log(this.recipeId);
    this.photos = new Array();   //ne  [];
    this.gS.getImages(this.recipeId).subscribe(res=> this.photos=res );
      console.log(this.photos[0].path);

  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.gS.uploadPhoto(this.recipeId, formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.OnUploadFinished.emit(event.body);
        }
      });
  }
}
