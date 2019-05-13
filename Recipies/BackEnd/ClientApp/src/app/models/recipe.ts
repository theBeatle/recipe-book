import { User } from 'src/app/models/user';
import { Category } from 'src/app/models/category';
import { Country } from 'src/app/models/country';


export class Recipe {
  country: any;

  category: Category;

  topic: string;

  description: string;

  user: User;

  viewscounter: number;

  creationdate: Date;

  creationDate: string;

  gallery: string[];

  rating: number;

  id:number;
}
