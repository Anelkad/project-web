import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logged = false;
  username="";
  password="";

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token)this.logged = true;
  }

  constructor(private productService: ProductsService, private location: Location) { }

  login(){
    this.productService.login(this.username,this.password).subscribe(data=>{
      this.logged = true;
      localStorage.setItem('token', data.token);
      this.username="";
      this.password="";
    })
    this.location.replaceState('');
  }
  logout(){
    this.logged=false;
    localStorage.removeItem("token");
    this.location.replaceState('');
  }


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  get_homePressed() {
    return this.productService.get_homePressed()
  }
  //service used to flow the information between components
  title = 'front-end';
}
