import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { ClientComponent } from '../client.component';
import { SignupComponent } from './signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeProducts2Component } from './home-products2/home-products2.component';

const routes: Routes = [
  { path: '', component : ClientComponent } ,
  {path :'signUp' , component : SignupComponent} ,
  {path:'home' , component : HomeComponent, children : [
   {path : 'cart' , component : CartComponent} , 
    {path : 'products' , component : HomeProductsComponent},
    {path : 'page2' , component : HomeProducts2Component}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
