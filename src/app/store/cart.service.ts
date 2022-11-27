import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemList: any = [];
  priceTotal!: number;
  public productList$ = new BehaviorSubject<any>([]);
  public search$ = new BehaviorSubject<string>('');

  constructor() {}
  getProducts() {
    return this.productList$.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList$.next(product);
  }
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList$.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let priceTotal = 0;
    this.cartItemList.map((e: any) => {
      priceTotal += e.total;
    });
    return priceTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((e: any, index: any) => {
      if (product.id === e.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList$.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList$.next(this.cartItemList);
  }
}
