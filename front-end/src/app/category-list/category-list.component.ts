import { Component, OnInit, Input} from '@angular/core';
import {  Category, categories } from '../categories';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { Product, products } from '../products';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  @Input() declare category: Category;

  categories = categories;
  products = products;
  
  constructor() {}

  Show(category: Category){
    category.ok=!category.ok;
  }

  getProducts(): Product[] {
    return this.products.filter(product => product.class == this.category.id);
  }

  ngOnInit(): void {
  }

}
