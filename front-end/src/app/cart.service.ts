import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Map<Product, number>();
  constructor() { }

  add_toCart(product: Product) {
    if(this.cart.has(product)) {
      this.cart.set(product, this.cart.get(product)! + 1);
    }
    else {
      this.cart.set(product, 1);
    }
  }
  clear() {
    this.cart.clear();
  }
  delete(product: Product) {
    let value = this.cart.get(product);
    if(value == 1) {
      this.cart.delete(product);
    }
    else {
      this.cart.set(product, --value!);
    }
  }

  get_Total() {
    let total = 0;
    for(let [key, value] of this.cart) {
      total = total + key.price * value;
    }

    return total;
  }
  getCart() {
    return this.cart;
  }
}
