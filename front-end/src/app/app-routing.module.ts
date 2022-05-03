import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdditionComponent } from './addition/addition.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path: 'categories/:categoryID/products', component: ProductsComponent},
  { path: 'categories/:categoryID/products/:id', component: ProductDetailComponent},
  { path: 'products/:id/addition', component: AdditionComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
