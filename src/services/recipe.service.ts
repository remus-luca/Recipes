import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }
  getRecipes(): Observable<Recipe[]> {
    const url = `${this.baseUrl}/recipes`;
    return this.http.get<Recipe[]>(url);
  }
  postRecipe(data: any) {
    return this.http.post<any>('http://localhost:3000/recipes/', data);
  }
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.baseUrl}/recipes/${id}`;
    return this.http.get<Recipe>(url);
  }
  putRecipe(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/recipes/' + id, data);
  }
  updateRecipe(payload: Recipe, id: number): Observable<Recipe> {
    const url = `${this.baseUrl}/recipes/${id}`;
    return this.http.patch<Recipe>(url, payload, httpOptions);
  }
  deleteRecipe(id: number): Observable<void> {
    const url = `${this.baseUrl}/recipes/${id}`;
    return this.http.delete<void>(url);
  }
}
