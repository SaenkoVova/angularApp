import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore) { }

  getProducts(pageSize, startAt, endAt) {
    return this.afs.collection(`products`, ref => ref
                                        .orderBy(`prodNum`)
                                        .limit(pageSize)
                                        .startAt(startAt)
                                        .endAt(endAt))
                                        .snapshotChanges();
  }
  getProduct(id) {
    return this.afs.doc(`products/${id}`).valueChanges();
  }
  getProductsLength() {
    const id = 'QiNzonpiJ97NU9dzXMUS';
    return this.afs.doc(`counters/${id}`).valueChanges();
  }
  addDoc() {
    // for (let i = 0; i < 10; i++) {
    //   this.afs.collection(`products`).add({
    //     discountPrice: 10,
    //     id: ``,
    //     imageUrl: `/assets/prod${i}.jpg`,
    //     orderQuantity: 1,
    //     price: 100,
    //     quantity: 10,
    //     sum: 0,
    //     title: `toy ${i}`
    //   });
    // }
  }
}
