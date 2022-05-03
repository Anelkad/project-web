import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import {Category} from "../categories";
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category!: Category;
  category_id!: number;
  products!: Product[];

  find!: string;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.put_homePressed(false);
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category_id = +routeParams.get('categoryID')!;
    this.getProducts_byCategory(this.category_id);
    this.getCategory(this.category_id).subscribe((data)=>{
      this.category= data;
    });

  }

  Find() {
    this.products =this.products.filter(k => k.name.toLowerCase().includes(this.find.toLowerCase()));
    if(this.find == '' ) {
      this.getProducts_byCategory(this.category_id);
    }
  }

  getCategory(id: number) {
    return this.productService.getCategory(id);
  }

  put_homePressed(homePressed: boolean) {
    this.productService.put_homePressed(homePressed);
  }

  getProducts_byCategory(id: number) {
    this.productService.getProducts_byCategory(id).subscribe((data)=>{
      this.products = data;
    })
  }

}
