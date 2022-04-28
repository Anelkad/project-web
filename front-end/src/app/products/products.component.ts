import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../categories';
import { Product } from '../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category_name!: string;
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
    this.category_name = this.getCategory_name(this.category_id);
    // this.productService.getProducts_byCategory();
  }

  Find() {
    this.products =this.products.filter(k => k.name.toLowerCase().startsWith(this.find.toLowerCase()));
    if(this.find == '' ) {
      this.getProducts_byCategory(this.category_id);
    }
  }

  getCategory_name(id: number) {
    return this.productService.getCategory_name(id);
  }

  put_homePressed(homePressed: boolean) {
    this.productService.put_homePressed(homePressed);
  }

  getProducts_byCategory(id: number) {
    this.products = this.productService.getProducts_byCategory(id);
  }

  // getProducts_byCategory(id: number) {
  //   this.productService.getProducts_byCategory(id).subscribe((products)=> {
  //     this.products = products;
  //   });
  // }

}
