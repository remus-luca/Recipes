import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailWrapperComponent } from './recipe-detail-wrapper.component';

describe('RecipeDetailWrapperComponent', () => {
  let component: RecipeDetailWrapperComponent;
  let fixture: ComponentFixture<RecipeDetailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
