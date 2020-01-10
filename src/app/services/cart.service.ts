import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';


export class Product {
  id: string
  title: string
  price: number
  discountPrice: number
  imageUrl: string
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  cartProducts: Product[] = [];
  postDoc: AngularFirestoreDocument;
  prod: Product;
  setAddedId = new Set();
  private inventorySubject$ = new BehaviorSubject<Product>(this.prod);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor(private afs: AngularFirestore) {}

  getProducts() {
    return this.afs.collection(`products`).snapshotChanges();
  }
  getProduct(id) {
    return this.afs.doc(`products/${id}`).valueChanges();
  }
  getCartProducts() {
    return this.cartProducts;
  }
  addToCart(product) {
    this.cartProducts.push(product);
  }
  addToInventory(product: Product) {
    this.prod = product;
    this.inventorySubject$.next(product);
  }
  hasId(id) {
    return this.setAddedId.has(id);
  }
  addId(id) {
    this.setAddedId.add(id);
  }
}
