import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { SignupComponent } from './signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeProducts2Component } from './home-products2/home-products2.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeProductDetailComponent,
    HomeProductsComponent,
    SignupComponent,
    CartComponent,
    HomeProducts2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    SignupComponent
  ]
})
export class HomeModule { }
