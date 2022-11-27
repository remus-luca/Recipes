import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeStoreService } from 'src/app/store/recipe-store.service';
import { Recipe } from 'src/interfaces';
import { RecipeService } from 'src/services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  constructor(
    private recipeStore: RecipeStoreService,
    private recipeService: RecipeService
  ) {}
  @Input()
  recipe: Recipe;
  @Output() editSuperRecipe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  deleteRecipe(recipe: any) {
    this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
      this.recipeStore.deleteRecipe(recipe.id);
    });
  }
  onEdit() {
    this.editSuperRecipe.emit(this.recipe);
  }
}
