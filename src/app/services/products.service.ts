import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [];
  product;

  constructor(private afs: AngularFirestore) { }

  getProducts() {
    return this.afs.collection(`products`).snapshotChanges();
  }
  getProduct(id) {
    return this.afs.doc(`products/${id}`).valueChanges();
  }
  loadProducts() {
    return new Promise((resolve, reject) => {
      this.getProducts().subscribe(actionArray => {
        this.products = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...(item.payload.doc.data() as Object)
          } as Product;
        })
        console.log(this.products);
        if(this.products)
          resolve(this.products);
        else
          reject();
      });
    })
  }
  getProductsFromArray() {
    return this.products;
  }
  loadProductFromArray(id) {
    return new Promise((resolve, reject) => {
      if(!this.products.length) {
        this.getProduct(id).subscribe(data => {
          resolve(this.product = data as Product)
        })
      }
      else {
        resolve(
          this.product = this.products.find(item => item.id === id)
        )
      }
    })
  }
}
