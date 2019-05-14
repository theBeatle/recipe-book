import { Gallery } from "./gallery";

export class Recipe {
  id: number;

  countryName: string;

  category: Category;

  topic: string;

  description: string;

  user: User;

  viewscounter: number;

  creationdate: Date;

  cookingProcess:string;

  gallery: Gallery[];

  rating: number;

  id:number;
}
