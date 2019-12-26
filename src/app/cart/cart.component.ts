import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = []

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.items
  }
  clearCart() {
    this.cartService.clearCart()
    this.items = this.cartService.items
  }
}
