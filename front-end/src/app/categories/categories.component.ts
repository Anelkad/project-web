import { Component, OnInit } from '@angular/core';
import { Category } from '../categories';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]=[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data)=>{
      this.categories= data;
    });
  }

}
