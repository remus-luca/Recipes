import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeStoreService } from 'src/app/store/recipe-store.service';
import { Recipe } from 'src/interfaces';
import { RecipeService } from 'src/services';

@Component({
  selector: 'app-recipe-detail-wrapper',
  templateUrl: './recipe-detail-wrapper.component.html',
  styleUrls: ['./recipe-detail-wrapper.component.scss'],
})
export class RecipeDetailWrapperComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;
  recipeToBeEdited: Recipe = null;
  constructor(
    private route: ActivatedRoute,
    private recipesStore: RecipeStoreService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipe(this.route.snapshot.params['id'])
      .subscribe((recipe) => (this.recipe = recipe));

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
