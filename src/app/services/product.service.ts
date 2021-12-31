import { Injectable } from '@angular/core';
import {Produit} from '../shared/models/produit' ;
import { CATALOGUE } from '../shared/mock-data/catalogue-produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  getProducts(): Produit[] {
    return CATALOGUE;
    }

  constructor() { }
}
