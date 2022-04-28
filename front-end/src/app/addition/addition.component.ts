import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Addition } from '../additions';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  declare addition: Addition;
  image_num: number = 0;
  dots: string[] = ['dot active', 'dot', 'dot'];

 
  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) {
    this.put_homePressed(false);
  }
  put_homePressed(hompressed: boolean) {
    this.productService.put_homePressed(hompressed);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.addition = this.getAddition(+routeParams.get('id')!)!;
  }

  getAddition(id: number) {
    return this.productService.getAddition(id);
  }

  
  // add_toCart(product: Product) {
  //   this.cartService.add_toCart(product);
  // }

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
    this.addition.like_count++;
  }
}
