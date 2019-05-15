import { Gallery } from "./gallery";
import { User } from "./user";

export class Recipe {
  id: number;

  countryName: string;

  categoryName: string;

  topic: string;

  description: string;

  userId: string;

  userName:string;

  viewsCounter: number;

  creationDate: Date;

  cookingProcess:string;

  gallery: Gallery[];

  rating: number;

  
}
