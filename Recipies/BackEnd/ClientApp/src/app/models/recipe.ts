import { Gallery } from "./gallery";

export class Recipe {
  id: number;

  countryName: string;

  categoryName: string;

  topic: string;

  description: string;

  userId: string;

  viewscounter: number;

  creationDate: Date;

  cookingProcess:string;

  gallery: Gallery[];

  rating: number;

  
}
