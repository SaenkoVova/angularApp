import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  items: Observable<Product[]>;

  constructor(
    private httpClient: HttpClient,
    private afs: AngularFirestore) { 
      this.items = this.afs.collection(`products`).valueChanges();
    }

  getProducts() {
    return this.items;
  }
  
}
