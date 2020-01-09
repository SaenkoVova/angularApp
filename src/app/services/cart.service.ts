import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

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

  items;
  postDoc: AngularFirestoreDocument

  constructor(private afs: AngularFirestore) {}

  getProducts() {
    return this.afs.collection(`products`).snapshotChanges();
  }
  getProduct(id) {
    return this.afs.doc(`products/${id}`).valueChanges();
  }
  
  
}
