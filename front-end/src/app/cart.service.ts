import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Map<Product, number>();
  // products = product.name;
  constructor(private http: HttpClient) { }

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
  getProducts() {
    let summary = "";
    for(let [key, value] of this.cart){
      summary = summary + key.name + " x " +value + " ";
    }
    return summary;
  }
  createOrder(product: String, name:String, address:String, phone_number:String,): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/' + 'api/cart/',{'name':name, 'address':address,'contacts':phone_number, 'product':product})
  }
}
