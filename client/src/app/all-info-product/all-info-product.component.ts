import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-all-info-product',
  templateUrl: './all-info-product.component.html',
  styleUrls: ['./all-info-product.component.css']
})
export class AllInfoProductComponent implements OnInit {

  product;

  constructor(
   private route: ActivatedRoute,
   private productsService: ProductsService,
   public cartService: CartService,
  ) { }

  ngOnInit() {
    this.getProduct();
    this.addIdAfterReloading();
  }
  getProduct() {
    this.productsService.node$.subscribe(n => this.product = n);
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
}
