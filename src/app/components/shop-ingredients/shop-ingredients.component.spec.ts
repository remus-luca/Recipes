import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIngredientsComponent } from './shop-ingredients.component';

describe('ShopIngredientsComponent', () => {
  let component: ShopIngredientsComponent;
  let fixture: ComponentFixture<ShopIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
