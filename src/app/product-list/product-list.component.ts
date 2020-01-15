import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.loadProducts();
    this.addIdAfterReloading();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe(actionArray => {
      this.products = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as Object)
        } as Product;
       
      });
    });
  }
  addToCart(product) {
    if(!this.cartService.hasId(product.id)) {
      this.cartService.addToCart(product);
      this.cartService.addToInventory(product);
    }
    this.cartService.addId(product.id);
  }
  addToInventory(product) {
    this.cartService.addToInventory(product)
  }
  addIdAfterReloading() {
    if(!this.cartService.setAddedId.size) {
      const all = this.cartService.getProductFromLocalStorage();
      for (const item of all) {
        this.cartService.addId(item.id);
      }
    }
  }
}
