import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Cake', 'This is a Cake recipe', 'https://images.pexels.com/photos/703116/pexels-photo-703116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  ];
}