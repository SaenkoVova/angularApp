import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(actionArray => {
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
}
