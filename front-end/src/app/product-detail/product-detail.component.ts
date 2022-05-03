import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { Addition } from "../additions";
import { ProductsService } from '../products.service';
import { Category } from "../categories";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  product!: Product;
  category!: Category;
  image_num: number = 0;
  image: string[] = [];
  dots: string[] = ['dot active', 'dot', 'dot'];
  addition!: Addition;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.productService.getProduct(productIdFromRoute).subscribe((data)=>{
      this.product = data;
      this.image = [this.product.img1, this.product.img2, this.product.img3];
      })

    this.productService.getAddition(productIdFromRoute).subscribe((data)=>{
      this.addition= data;
    })

    const category_id = +routeParams.get('categoryID')!;
    this.getCategory(category_id);
  }

  add_likes() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.productService.getProductLike(productIdFromRoute).subscribe((data)=>{
      this.product = data;
      this.image = [this.product.img1, this.product.img2, this.product.img3];
      })
  }


  getCategory(id: number) {
    this.productService.getCategory(id).subscribe((data)=>{
      this.category= data;
    });
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

}
