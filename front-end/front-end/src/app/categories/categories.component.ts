import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { categories } from '../categories';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = categories;
  constructor() { }

  ngOnInit(): void {
  }

  // getProducts_byCategory(id: number) {
  //   this.productService.getProducts_byCategory(id);
  // }
  changeBackground(background: string) {

    // const res ='url(' + background + ')';

    // const element = document.getElementById("#main-back")!;
    // element.style.background = res;
    // element.style.position = "absolute";
    // element.style.width = '100vw';
    // element.style.height = '143vh';
    //будем менять тот бэкграунд который находится внутр этого
  }

}
