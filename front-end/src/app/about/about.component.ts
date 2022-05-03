import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {About} from "../products";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about!: About;
  constructor(private productService: ProductsService) {
    productService.put_homePressed(false);

  }

  ngOnInit(): void {
    this.productService.getAbout().subscribe((data)=>{
      this.about = data;
    })
  }

}
