import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from "../products.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';

  logged = false;

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token)this.logged = true;
    console.log(this.username);
    console.log(this.password);
  }

  constructor(private productsService: ProductsService, private location: Location) { }

  login(){
    this.productsService.login(this.username,this.password).subscribe(data=>{
      this.logged = true;
      localStorage.setItem('token', data.token);
      this.username="";
      this.password="";
      console.log(this.username);
      console.log(this.password);
    })
    this.location.replaceState('');
  }
  logout(){
    this.logged=false;
    localStorage.removeItem("token");
    this.location.replaceState('');
  }
  // login() {
  //   if(this.username == "Admin" && this.password == "admin") {
  //     this.router.navigate(['/home']);
  //   }
  //
  // }

}
