import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';


export class Product {
  id: string
  title: string
  price: number
  discountPrice: number
  imageUrl: string
  quantity: number
  orderQuantity: number
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
    this.addToLocalStorage(product);
  }
  addToLocalStorage(product) {
    let identicElementsCounter = 0;
    const all = this.getProductFromLocalStorage();
    for (const item of all) {
      if(item.id === product.id) {
        identicElementsCounter++;
      }
    }
    if(!identicElementsCounter) {
      all.push(product);
      localStorage.setItem('products', JSON.stringify(all));
    }
  }
  getProductFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products') || '[]')
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

  increaseQuantity(product) {
    if(!this.cartProducts.length) {
      const clickedElem = this.getProductFromLocalStorage().find(item => item.id === product.id)
      if(clickedElem.quantity > 0) {
        clickedElem.orderQuantity++;
        clickedElem.quantity--;
      }
    }
    else {
      const clickedElem = this.getCartProducts().find(item => item.id === product.id)
      if(clickedElem.quantity > 0) {
        clickedElem.orderQuantity++;
        clickedElem.quantity--;
      }
    }
  }
  reduceQuantity(product) {
    if(!this.cartProducts.length) {
      const clickedElem = this.getProductFromLocalStorage().find(item => item.id === product.id)
      clickedElem.orderQuantity--;
      clickedElem.quantity++;
    }
    else {
      const clickedElem = this.getCartProducts().find(item => item.id === product.id)
        clickedElem.orderQuantity--;
        clickedElem.quantity++;
    }
  }
}
