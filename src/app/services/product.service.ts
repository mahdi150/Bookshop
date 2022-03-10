import { Injectable } from '@angular/core';
import {Produit} from '../shared/models/produit' ;
import { CATALOGUE, CATALOGUE2 } from '../shared/mock-data/catalogue-produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  getProducts(): Produit[] {
    return CATALOGUE;
    }
  getProducts2() : Produit[]{
    return CATALOGUE2 ;
  }

  constructor() { }
}
