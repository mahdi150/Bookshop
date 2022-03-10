import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home-products2',
  templateUrl: './home-products2.component.html',
  styleUrls: ['./home-products2.component.css']
})
export class HomeProducts2Component implements OnInit {
  title = "YASSINE INFO +" ;
  Produits : Produit[]=[];
  constructor(private productService: ProductService,private cartService:CartService) { }
   ngOnInit(): void {
     this.getProducts2()
  }
  ch="Detail de produit  : \n"  ;
  getProducts2() : void {
    this.Produits = this.productService.getProducts2() ;
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
