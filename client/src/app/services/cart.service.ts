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
  private addToCartSubject$ = new BehaviorSubject<Product>(this.prod);
  private removeFromCartSubject$ = new BehaviorSubject<Product>(this.prod);
  addToCartChanged$ = this.addToCartSubject$.asObservable();
  removeFromCartChanged$ = this.removeFromCartSubject$.asObservable();

  constructor() {}

  addToCart(product) {
    product.orderQuantity = 1;
    product.sum = 0;
    console.log(product);
    this.addToLocalStorage(product);
    this.cartProducts = this.getProductFromLocalStorage();
  }
  addToLocalStorage(product) {
    let identicElementsCounter = 0;
    const all = this.getProductFromLocalStorage();
    for (const item of all) {
      if (item._id === product._id) {
        identicElementsCounter++;
      }
    }
    if (!identicElementsCounter) {
      product.sum = this.calcSum(product);
      all.push(product);
      localStorage.setItem('products', JSON.stringify(all));
    }
  }
  refreshLocalStorage(product) {
    const all = this.getProductFromLocalStorage();
    for (const item of all) {
      if (item._id === product._id) {
        item.orderQuantity = product.orderQuantity;
        item.quantity = product.quantity;
        item.sum = this.calcSum(item);
      }
    }
    localStorage.setItem('products', JSON.stringify(all));
  }
  getProductFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  addToCartEvent(product: Product) {
    this.prod = product;
    this.addToCartSubject$.next(product);
  }
  removeFromCartEvent(product: Product) {
    this.prod = product;
    this.removeFromCartSubject$.next(product);
  }
  hasId(id) {
    return this.setAddedId.has(id);
  }
  addId(id) {
    this.setAddedId.add(id);
  }
  removeId(id) {
    this.setAddedId.delete(id);
  }
  increaseQuantity(product) {
    for (const item of this.getProductFromLocalStorage()) {
      if (item._id === product._id) {
        if (item.quantity > 0) {
          item.orderQuantity++;
          item.quantity--;
          this.refreshLocalStorage(item);
        }
      }
    }
  }
  reduceQuantity(product) {
    for (const item of this.getProductFromLocalStorage()) {
      if (item._id === product._id) {
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
    localStorage.setItem('products', JSON.stringify(this.getProductFromLocalStorage().filter(i => i._id !== product._id)));
  }
}
