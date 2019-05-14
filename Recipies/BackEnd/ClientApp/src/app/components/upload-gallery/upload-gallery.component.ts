import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { GalleryService } from './../../services/gallery.service';

import { s } from '@angular/core/src/render3';
import { Gallery } from '../../models/gallery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})
export class UploadGalleryComponent implements OnInit {
  public progress: number;
  public message: string;
  public photos: Observable<Gallery[]>;

  @Input('recipeId') recipeId: number;

  @Output() public OnUploadFinished = new EventEmitter();

  constructor(private http: HttpClient, private gS: GalleryService) {}

  getAllImages() {
  //  this.photos = new Array();
    this.photos = null;
    this.photos = this.gS.getImages(this.recipeId);//.subscribe(res => (this.photos = res));
    console.log(this.photos);
  }

  clickDeleteImage(id: number) {
    this.gS.deletePhoto(this.recipeId, id).subscribe((e) => {
      this.getAllImages();
    }, (error) => {
      this.getAllImages();
    });

  }

  ngOnInit() {
    this.getAllImages();
  }

  public uploadFile = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.gS.uploadPhoto(this.recipeId, formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.getAllImages();
        this.message = 'Upload success.';
        this.OnUploadFinished.emit(event.body);
      }
    });
  };
}
