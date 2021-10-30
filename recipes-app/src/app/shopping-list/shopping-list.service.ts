import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService {

  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient("asd", 123), new Ingredient("sadasd", 321)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

}