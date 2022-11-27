import { Component, OnInit } from '@angular/core';
import { RecipeStoreService } from 'src/app/store/recipe-store.service';
import { Recipe } from '../../../interfaces';

@Component({
  selector: 'app-more-recipes',
  templateUrl: './more-recipes.component.html',
  styleUrls: ['./more-recipes.component.scss'],
})
export class MoreRecipesComponent implements OnInit {
  recipes: Recipe[];
  recipeToBeEdited: Recipe = null;
  constructor(private recipesStore: RecipeStoreService) {}

  ngOnInit(): void {
    this.recipesStore.recipes$.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
  editRecipe(recipe: Recipe) {
    this.recipeToBeEdited = recipe;
  }
  onFormClose() {
    this.recipeToBeEdited = null;
  }
}
