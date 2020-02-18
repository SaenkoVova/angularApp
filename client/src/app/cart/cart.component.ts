import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { faCartPlus, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

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
  items = [];
  sum = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProductFromLocalStorage();
    this.getFinallySum();
  }
  increaseQuantity(item) {
    this.cartService.increaseQuantity(item);
    this.items = this.cartService.getProductFromLocalStorage();
    this.sum = 0;
    this.getFinallySum();
  }
  reduceQuantity(item) {
    this.cartService.reduceQuantity(item);
    this.items = this.cartService.getProductFromLocalStorage();
    this.sum = 0;
    this.getFinallySum();
  }
  removeFromCart(product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getProductFromLocalStorage();
    this.cartService.removeFromCartEvent(product);
    this.cartService.removeId(product._id);
    this.toggleCartVisible.emit();
  }
  getFinallySum() {
    for (const item of this.items) {
      this.sum = item.sum + this.sum;
    }
  }
}
