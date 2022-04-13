import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import { Category } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() declare product: Product;
  @Input() declare category: Category;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  LikeOn(p: Product){
    p.like++;
  }

  Remove(p: Product){
    p.ok=false;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/