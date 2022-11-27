import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }
  getProduct(id: number): Observable<Product> {
    const url = `${this.url}/products/${id}`;
    return this.http.get<Product>(url);
  }
  getProducts(): Observable<Product[]> {
    const url = `${this.url}/products`;
    return this.http.get<Product[]>(url);
  }
}
