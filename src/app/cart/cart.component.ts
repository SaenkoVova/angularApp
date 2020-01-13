import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService, Product } from '../services/cart.service';
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
  quantity;
  disabled = true;
  itemSum = {
    sum: 0
  }

  items = []

  faCartPlus = faCartPlus;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.quantity = this.cartService.getQuantity();
    this.items = this.cartService.getCartProducts();
    this.items = this.cartService.getProductFromLocalStorage();
    this.initializeSum();
    
  }

  initializeSum() {
    for (let item of this.items) {
      item = Object.assign(item, this.itemSum);
      item.sum = item.price * this.quantity;
    }
  }
  increaseQuantity(item) {
    this.cartService.increaseQuantity(item);
    this.quantity = this.cartService.getQuantity();
  }
  reduceQuantity(item) {
    this.cartService.reduceQuantity(item);
    this.quantity = this.cartService.getQuantity();
  }
}
