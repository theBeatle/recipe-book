import { Category } from './../models/category';
import { Country } from './../models/country';
import { EditRecipe } from './../models/edit-recipe.viewmodel';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { HOST_URL } from '../../app/config';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url = HOST_URL;
  constructor(private http: HttpClient) {}

  getImages(recipeId: number): Observable<Gallery[]> {
    return this.http.get<Gallery[]>('https://localhost:44385/api/Gallery/GetImagesById?RecipeId=' + recipeId);
  }

  uploadPhoto(recipeId: number, formData: FormData) {
    return this.http.post(
      'https://localhost:44385/api/Gallery/UploadGallery?RecipeId=' + recipeId,
      formData,
      { reportProgress: true, observe: 'events' }
    );
  }
}
