import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';
import {PageEvent} from '@angular/material/paginator';
import {NgprogressService} from '../services/ngprogress.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  startAt = 1;
  endAt = this.pageSize;


  constructor(
    private productsService: ProductsService,
    public cartService: CartService,
    private ngprogressService: NgprogressService) { }

  ngOnInit() {
    this.loadProducts(this.pageSize, this.startAt, this.endAt)
      .then(() => {
        this.ngprogressService.ngProgressComplete();
      });
    this.addIdAfterReloading();
  }

  loadProducts(pageSize, startAt, endAt) {
    return new Promise((resolve, reject) => {
      this.ngprogressService.ngProgressStart();
      // this.productsService.getProducts(pageSize, startAt, endAt).subscribe(actionArray => {
      //   this.products = actionArray.map(item => {
      //     return {
      //       id: item.payload.doc.id,
      //       ...(item.payload.doc.data() as Product)
      //     } as Product;
      //   });
      //   resolve();
      // });
    });
  }

  addToCart(product) {
    if (!this.cartService.hasId(product.id)) {
      this.cartService.addToCart(product);
      this.cartService.addToCartEvent(product);
    }
    this.cartService.addId(product.id);
  }
  addToCartInit(product) {
    this.cartService.addToCartEvent(product);
  }
  addIdAfterReloading() {
    if (!this.cartService.setAddedId.size) {
      const all = this.cartService.getProductFromLocalStorage();
      for (const item of all) {
        this.cartService.addId(item.id);
      }
    }
  }
  togglePage(event) {
    this.startAt = event.pageIndex * event.pageSize + 1;
    this.endAt = (event.pageIndex * event.pageSize) + event.pageSize;
    console.log(this.startAt, this.endAt);
    this.loadProducts(event.pageSize, this.startAt, this.endAt).then(() => {
      this.ngprogressService.ngProgressComplete();
    });
  }
}
