import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/store/cart.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  searchKey: string = '';
  filterCategory: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((e: any) => {
        if (e.category === 'kitchen ustensil') {
          e.category = 'kitchen ustensil';
        }
        Object.assign(e, { quantity: 1, total: e.price });
      });

    });
    this.cartService.search$.subscribe((value: any) => {
      this.searchKey = value;
    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((e: any) => {
      if (e.category == category || category == '') {
        return e;
      }
    });
  }
}
