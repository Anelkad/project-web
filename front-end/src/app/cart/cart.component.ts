import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items = this.cartService.getCart();
    total: number = 0;
    address!: string;

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.put_homePressed(false);

  }

  ngOnInit(): void {
    this.get_Total();
  }
  put_homePressed(hompressed: boolean) {
    this.productService.put_homePressed(hompressed);
  }

  get_Total() {
    this.total = this.cartService.get_Total();
  }

  delete(product: Product) {
    this.cartService.delete(product);
    this.get_Total();
  }

  clear() {
    this.cartService.clear();
    this.get_Total();
  }
  
  order() {
    window.alert("will be delivered " + this.address);
    this.address="";
  }

}
