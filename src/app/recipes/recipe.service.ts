import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Black Forest',
            'Dark as a chocolate. Yet fresh as a plum.',
            'https://images.pexels.com/photos/703116/pexels-photo-703116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            [
                new Ingredient('Egg', 5),
                new Ingredient('Cream', 1),
                new Ingredient('Cherry', 2),
            ]),
        new Recipe('Cheese Burger',
            'What else you need to say?',
            'https://images.pexels.com/photos/1362044/pexels-photo-1362044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    getSingleRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}