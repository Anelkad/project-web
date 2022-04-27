import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  category_name!: string;
  image_num: number = 0;
  dots: string[] = ['dot active', 'dot', 'dot'];
  addition_name!: string;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.product = this.getProduct(+routeParams.get('id')!)!;
    const category_id = +routeParams.get('categoryID')!;
    this.getCategory_name(category_id);
  }
// Check Addition

  checkAddition(id: number) {
    let x = this.productService.getAddition(this.product.id)!.name;
    if (x!== null ) {
      this.addition_name = x;
      return true;
    }
    else {
      return false;
    }
   
  }

  getCategory_name(id: number) {
    this.category_name = this.productService.getCategory_name(id);
  }
  
  getProduct(id: number) {
    return this.productService.getProduct(id);
  }

  add_toCart(product: Product) {
    this.cartService.add_toCart(product);
  }

  share() {
    this.productService.share();
  }

  right_move(image_num: number) {
    if (image_num === 2) {
      image_num = 0;
    }
    else {
      image_num += 1;
    }

    this.current_slide(image_num);
  }

  left_move(image_num: number) {
    if (image_num === 0) {
      image_num = 2;
    }
    else {
      image_num -= 1;
    }

    this.current_slide(image_num);
  }

  current_slide(index: number) {
    this.image_num = index;
    this.dots[0] = 'dot';
    this.dots[1] = 'dot';
    this.dots[2] = 'dot';
    this.dots[index] = 'dot active';
  }

  add_likes() {
    this.product.like_count++;
  }
}
