import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get_homePressed() {
    return this.productService.get_homePressed()
  }
  //service used to flow the information between components
  title = 'front-end';
}
