import { Injectable } from '@angular/core';
import {AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';


export interface Product {
  id?: string,
  title?: string,
  price?: number,
  discountPrice?: number,
  imageUrl?: string
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Observable<any>;

  constructor(
    private afs: AngularFirestore) { 
      this.items = this.afs.collection(`products`).valueChanges();
    }

  getProducts() {
    return this.items;
  }
  getProduct(id) {
    // this.items.pipe(filter(value => value.id === id));
    // return this.items;
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === id))
    )
  }
  
  
}
