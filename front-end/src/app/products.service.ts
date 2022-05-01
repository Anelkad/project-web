import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { additions } from './additions';
import { categories } from './categories';
import { Product, AuthToken} from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  homePressed!: boolean;

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

  getProducts_byCategory(id: number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }

  getCategory_name(id: number) {
    return categories.find((x) => x.id === id)!.title;
  }

  share() {
    window.open("tg://msg_url?url=" + "http://localhost:4200/" + this.router.url + "&amp;text=text");
  }
  // getProducts_byCategory(id: number): Observable<Product> {
  //   this.products = products.filter((x => x.class == id));
  //   return this.products;
  // }

  getAddition(id: number) {
    return additions.find((x) => x.product === id);
    // if(additions.includes(additions[id - 1])) {
    //   return additions.find((x) => x.id === id);
    // }
    // else {
    //   return null;
    // }
  }
}
