import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { GalleryService } from './../../services/gallery.service';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})
export class UploadGalleryComponent implements OnInit {

  public progress: number;
  public message: string;

  @Input('recipeId') recipeId: number;


  @Output() public OnUploadFinished = new EventEmitter();

  constructor(private http: HttpClient, private gS: GalleryService) { }

  ngOnInit() {

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
