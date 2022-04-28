import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { additions } from './additions';
import { categories } from './categories';
import { products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  homePressed!: boolean;
  constructor(private router: Router) {}

  put_homePressed(homePressed: boolean) {
    this.homePressed = homePressed;
  }

  get_homePressed() {
    return this.homePressed;
  }

  getProduct(id: number) {
    return products.find((x) => x.id === id);
  }
  
  getProducts_byCategory(id: number) {
    return products.filter((x => x.class == id));
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
