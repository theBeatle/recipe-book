import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  creationdate:Date;
  
  url = 'http://localhost:';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  recipe:Recipe;
  constructor(private http: HttpClient) { }


  getRecipeById(RecipeId:string):Observable<Recipe>{
    return this.http.get<Recipe>(this.url+''+RecipeId);
    // this.recipe.ViewsCounter=15;
    // this.recipe.Topic='Chettinad Chicken';
    // this.recipe.Raiting=3;
    // this.recipe.Ingredients=['Cornflour 1/2 Cups','Sugar 1 Cups','Cardomom Powder 1/2 Tsp','Some Cashew Nuts 2 Tbsp','Orange Food Colour 1 Pinch','Lemon Juice 2 Tsp','Ghee 1/2 Bowls','Water 1/2 Bowls'];
    // this.recipe.Description='Chicken Chettinad or Chettinad chicken is a classic Indian recipe, from the cuisine of Chettinad. It consists of chicken marinated in yogurt, turmeric and a paste of red chillies, kalpasi, coconut, poppy seeds, coriander seeds, cumin seeds, fennel seeds, black pepper, ground nuts, onions, garlic and gingelly oil. It is served hot and garnished with coriander leaves, accompanied with boiled rice or paratha.';
    // this.creationdate.setFullYear(2019,4,22);
    // this.recipe.CreationDate=this.creationdate;
    // this.recipe.Category='Flavours Of Chettinad';
    
  }
}
