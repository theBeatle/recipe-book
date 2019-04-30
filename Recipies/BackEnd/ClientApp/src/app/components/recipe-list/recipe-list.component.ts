import { Category } from './../../models/category';
import { Observable } from 'rxjs';
import { Component , OnInit} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[]=[];
  page: number = 1;
  categories: Category[];
  constructor(
    private rS: RecipeService
  ) { }

    fetchRecipies() {
      this.rS.getAllRecipies(this.page).subscribe((res) => {this.recipies = this.recipies.concat(res); });
    }


  ngOnInit() {
    this.rS.getCategories().subscribe(res => this.categories = res);
    this.fetchRecipies();
  }
  onScroll() {
    this.page = this.page + 1;
    this.fetchRecipies();
  }
}

