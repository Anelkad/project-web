import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductsService) {
    this.check_homePressed(true);
  }


  ngOnInit(): void {
  }

  check_homePressed(homePressed: boolean) {
    this.productService.put_homePressed(homePressed);
  }

}
