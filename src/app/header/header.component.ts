import { Component, OnInit } from '@angular/core';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormControl} from '@angular/forms';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBriefcase = faBriefcase;

  rememberMe = true;
  authVisible = false;
  cartVisible = false;
  cartCouter;
  checkoutForm;
  search = new FormControl('');
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private cartService: CartService) {
      this.checkoutForm = this.formBuilder.group({
        email: '',
        password: ''
      });
    }

  ngOnInit() {
    this.observeForAddToCart();
    this.observeForRemoveFromCart();
  }
  observeForAddToCart() {
    this.cartService.addToCartChanged$.subscribe(data => {
      this.cartCouter = this.cartService.getProductFromLocalStorage().length;
      if (data !== undefined) {
       this.toggleCartVisible();
      }
    });
  }
  observeForRemoveFromCart() {
    this.cartService.removeFromCartChanged$.subscribe(data => {
      this.cartCouter = this.cartService.getProductFromLocalStorage().length;
      if (data !== undefined) {
       this.toggleCartVisible();
      }
    });
  }
  toggleAuthVisible() {
    this.authVisible = !this.authVisible;
  }
  signInWithEmailEndPassword(userData) {
    this.auth.signInWithEmailAndPassword(userData.email, userData.password);
  }
  toggleCartVisible() {
    this.cartVisible = !this.cartVisible;
  }
}
