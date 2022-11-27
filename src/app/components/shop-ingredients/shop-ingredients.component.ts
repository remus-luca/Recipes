import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/store/cart.service';

@Component({
  selector: 'app-shop-ingredients',
  templateUrl: './shop-ingredients.component.html',
  styleUrls: ['./shop-ingredients.component.scss'],
})
export class ShopIngredientsComponent implements OnInit {
  searchIngredient!: string;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  search(event: any) {
    this.searchIngredient = (event.target as HTMLInputElement).value;
    this.cartService.search$.next(this.searchIngredient);
  }
}
