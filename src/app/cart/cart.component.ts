import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService, Product } from '../services/cart.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  @Output() toggleCartVisible = new EventEmitter()

  items: Product[] = []

  faCartPlus = faCartPlus;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getCartProducts();
  }
  
}
