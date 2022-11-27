import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from 'src/interfaces';
import { RecipeService } from 'src/services';

@Injectable({
  providedIn: 'root',
})
export class RecipeStoreService {
  public recipes$ = new BehaviorSubject<Recipe[]>([]);
  private addRecipe$ = new Subject<Recipe>();
  private updateRecipe$ = new Subject<Recipe>();
  private deleteRecipe$ = new Subject<number>();
  constructor(private recipeService: RecipeService) {
    this.addRecipe$.subscribe((newRecipe: Recipe) => {
      this.recipes$.next([...this.recipes$.getValue(), newRecipe]);
    });
    this.updateRecipe$.subscribe((updatedRecipe) => {
      const updatedRecipes: Recipe[] = [];
      this.recipes$.getValue().forEach((recipe) => {
        recipe.id === updatedRecipe.id
          ? updatedRecipes.push(updatedRecipe)
          : updatedRecipes.push(recipe);
      });
      this.recipes$.next(
        // this.recipes$.getValue().map((recipe) => {
        //   return recipe.id === updatedRecipe.id ? updatedRecipe : recipe;
        // })
        updatedRecipes
      );
    });
    this.deleteRecipe$.subscribe((idtoBeDeleted: number) => {
      this.recipes$.next(
        this.recipes$.getValue().filter((recipe) => {
          return recipe.id != idtoBeDeleted;
        })
      );
    });

    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes$.next(recipes);
    });
  }

  addNewRecipe(recipe: Recipe) {
    this.recipeService
      .postRecipe(recipe)
      .subscribe((recipe) => this.addRecipe$.next(recipe));
  }
  updateRecipe(payload: Recipe, id: number) {
    this.recipeService.updateRecipe(payload, id).subscribe((updatedRecipe) => {
      this.updateRecipe$.next(updatedRecipe);
    });
  }
  deleteRecipe(id: number) {
    this.deleteRecipe$.next(id);
  }
}
