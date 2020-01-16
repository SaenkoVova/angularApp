import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { faCartPlus, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  @Output() toggleCartVisible = new EventEmitter();

  faMinus = faMinus;
  faPlus = faPlus;
  faCartPlus = faCartPlus;
  disabled = true;
  items = []

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProductFromLocalStorage();
  }
  increaseQuantity(item) {
    this.cartService.increaseQuantity(item);
    this.items = this.cartService.getProductFromLocalStorage();
  }
  reduceQuantity(item) {
    this.cartService.reduceQuantity(item);
    this.items = this.cartService.getProductFromLocalStorage();
  }
  removeFromCart(product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getProductFromLocalStorage();
    this.cartService.addToInventory(product);
    this.toggleCartVisible.emit();
  }
}
