import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RecipeStoreService } from 'src/app/store/recipe-store.service';
import { Recipe } from 'src/interfaces';

enum formSubmitState {
  ADD = 'Adaugare',
  EDIT = 'Salvare modificari',
}

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss'],
})
export class AddRecipeFormComponent implements OnInit, OnChanges {
  productForm: FormGroup;
  submitButtonText: string = formSubmitState.ADD;

  @Input() recipeToBeEdited: Recipe;
  @Output() close = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private recipeStore: RecipeStoreService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      imageUrl: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      ingredients: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipeToBeEdited'].currentValue) {
      this.submitButtonText = formSubmitState.EDIT;
      this.productForm.patchValue({
        imageUrl: this.recipeToBeEdited.imageUrl,
        name: this.recipeToBeEdited.name,
        ingredients: this.recipeToBeEdited.ingredients,
        description: this.recipeToBeEdited.description,
      });
    } else {
      this.submitButtonText = formSubmitState.ADD;
    }

    if (changes['visible'] && changes['visible'].currentValue === false) {
      this._resetForm();
    }
  }

  addRecipe() {
    if (this.recipeToBeEdited) {
      this.recipeStore.updateRecipe(
        this.productForm.value,
        this.recipeToBeEdited.id
      );
    } else {
      this.recipeStore.addNewRecipe(this.productForm.value);
    }

    this._resetForm();
  }

  onCloseModal() {
    this.close.emit();
    this._resetForm();
  }

  private _resetForm() {
    this.productForm.reset({
      imageUrl: '',
      name: '',
      ingredients: '',
      description: '',
    });
  }
}
