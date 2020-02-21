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
  length;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  categories = [];

  constructor(
    private productsService: ProductsService,
    public cartService: CartService,
    private ngprogressService: NgprogressService) { }

  ngOnInit() {
    this.loadProducts(this.pageSize, this.pageIndex);
    this.addIdAfterReloading();
  }

  loadProducts(pageSize, pageIndex) {
    this.ngprogressService.ngProgressComplete();
    this.ngprogressService.ngProgressStart();
    this.productsService.getProducts(pageSize, pageIndex)
      .subscribe(data => {
        this.products = data.array;
        this.loadCategories();
        this.length = data.length;
        this.ngprogressService.ngProgressComplete();
      });
  }
  loadCategories() {
    this.productsService.getCategories()
      .subscribe( categories => {
        this.categories = categories;
      });
  }
  addToCart(product) {
    if (!this.cartService.hasId(product._id)) {
      this.cartService.addToCart(product);
      this.cartService.addToCartEvent(product);
    }
    this.cartService.addId(product._id);
  }
  addToCartInit(product) {
    this.cartService.addToCartEvent(product);
  }
  addIdAfterReloading() {
    if (!this.cartService.setAddedId.size) {
      const all = this.cartService.getProductFromLocalStorage();
      for (const item of all) {
        this.cartService.addId(item._id);
      }
    }
  }
  togglePage(event): PageEvent {
    this.loadProducts(event.pageSize, event.pageIndex);
    return;
  }
}
