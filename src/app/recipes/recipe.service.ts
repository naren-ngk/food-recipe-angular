import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cake', 'This is a Cake recipe', 'https://images.pexels.com/photos/703116/pexels-photo-703116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
        new Recipe('Cake', 'This is a Cake recipe', 'https://images.pexels.com/photos/703116/pexels-photo-703116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}