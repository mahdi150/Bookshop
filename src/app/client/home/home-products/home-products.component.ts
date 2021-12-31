import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  title = "PRODUCTS" ;
  Produits : Produit[]=[];
  constructor(private productService: ProductService,private cartService:CartService) { }
   ngOnInit(): void {
     this.getProducts()
  }
  ch="Detail de produit  : \n"  ;
  getProducts() : void {
    this.Produits = this.productService.getProducts() ;
  }
  AddToCart(prod:Produit){
    this.cartService.tableproduct=this.cartService.tableproduct.concat(prod)
    
  }
  
onDetail(bonjour : any ){
  alert(bonjour.description) ;
}


onAchete(bn : any){
  return bn.prix ;
}




}

