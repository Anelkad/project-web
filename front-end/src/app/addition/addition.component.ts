import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Addition } from '../additions';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  addition!: Addition;
  image_num: number = 0;
  image: string[] = [];
  dots: string[] = ['dot active', 'dot', 'dot'];


  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) {
    this.put_homePressed(false);
  }

  put_homePressed(homepressed: boolean) {
    this.productService.put_homePressed(homepressed);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.getAddition(+routeParams.get('id')!).subscribe((data)=>{
      this.addition= data;
      this.image = [this.addition.img1, this.addition.img2 ,this.addition.img3]
    })
  }

  getAddition(id: number) {
    return this.productService.getAddition(id);
  }

  add_likes() {
    const routeParams = this.route.snapshot.paramMap;
    this.productService.getAdditionLike(+routeParams.get('id')!).subscribe((data)=>{
      this.addition= data;
      this.image = [this.addition.img1, this.addition.img2 ,this.addition.img3]
    })
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
