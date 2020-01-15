import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  cartProducts: Product[] = [];
  prod: Product;
  setAddedId = new Set();
  private inventorySubject$ = new BehaviorSubject<Product>(this.prod);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor() {}

  
  getCartProducts() {
    return this.cartProducts;
  }
  addToCart(product) {
    this.addToLocalStorage(product);
    this.cartProducts = this.getProductFromLocalStorage();
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
      product.sum = this.calcSum(product);
      all.push(product);
      localStorage.setItem('products', JSON.stringify(all));
    }
  }
  refreshLocalStorage(product) {
    const all = this.getProductFromLocalStorage();
    for(let item of all) {
      if(item.id === product.id) {
        item.orderQuantity = product.orderQuantity;
        item.quantity = product.quantity;
        item.sum = this.calcSum(item);
      }
    }
    localStorage.setItem('products', JSON.stringify(all));
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
    for (const item of this.getProductFromLocalStorage()) {
      if(item.id === product.id) {
        if(item.quantity > 0) {
          item.orderQuantity++;
          item.quantity--;
          this.refreshLocalStorage(item);
        }
      }
    }
  }
  reduceQuantity(product) {
    for (const item of this.getProductFromLocalStorage()) {
      if(item.id === product.id) {
        item.orderQuantity--;
        item.quantity++;
        this.refreshLocalStorage(item);
      }
    }
  }
  calcSum(item) {
    return item.discountPrice ? item.orderQuantity * item.discountPrice : item.orderQuantity * item.price;
  }
  removeFromCart(product) {
    localStorage.setItem('products', JSON.stringify(this.getProductFromLocalStorage().filter(i => i.id !== product.id)));
  }
}
