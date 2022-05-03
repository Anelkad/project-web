import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './categories';
import { Product, AuthToken, About} from './products';
import { Addition} from "./additions";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  homePressed!: boolean;
  categories: Category[]=[];

  BASE_URL='http://127.0.0.1:8000';
  constructor(private router: Router, private http: HttpClient) {}

  put_homePressed(homePressed: boolean) {
    this.homePressed = homePressed;
  }

  get_homePressed() {
    return this.homePressed;
  }

  login(username:any,password:any): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`,{
      username,
      password
    });
  }

  getProduct(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }
  
  getProductLike(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/like/`);
  }

  getProducts_byCategory(id: number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getAbout(): Observable<About>{
    return this.http.get<About>(`${this.BASE_URL}/api/about/`);
  }

  share() {
    window.open("tg://msg_url?url=" + "http://localhost:4200/" + this.router.url + "&amp;text=text");
  }


  getAddition(id: number): Observable<Addition>{
    return this.http.get<Addition>(`${this.BASE_URL}/api/products/${id}/addition/`);
  }

  getAdditionLike(id: number): Observable<Addition>{
    return this.http.get<Addition>(`${this.BASE_URL}/api/products/${id}/addition/like/`);
  }
}
