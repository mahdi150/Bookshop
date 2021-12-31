import { Component, OnInit , Input } from '@angular/core';
import {CATALOGUE} from '../../../shared/mock-data/catalogue-produits' ;

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {
  produits = CATALOGUE ;

  @Input()msg!: string;
  constructor() {
    
   }
   
  ngOnInit(): void {
    console.log(this.msg) ;
  }
 
 

}
