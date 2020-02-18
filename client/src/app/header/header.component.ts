import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CartService } from '../services/cart.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from '../models/User';
import {GeneralService} from '../services/general.service';
import {Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authVisible = false;
  cartVisible = false;
  error = null;
  cartCouter;
  isAuth = false;
  search = new FormControl('');
  constructor(
    public auth: AuthService,
    private cartService: CartService,
    public generalService: GeneralService,
    private router: Router
  ) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.observeForAddToCart();
    this.observeForRemoveFromCart();
    this.isAuth = this.auth.getAuthStateFromLocalStorage().isAuth;
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
  toggleCartVisible() {
    this.cartVisible = !this.cartVisible;
  }
  signIn(email, password) {
    this.generalService.unsetError();
    let user: User = {
      email,
      password,
      userId: null,
      token: null
    };
    this.auth.signIn(user)
      .subscribe(data => {
          user = {
            email,
            password: null,
            userId: data.userId,
            token: data.token
          };
          this.auth.setUser(user);
          this.toggleAuthVisible();
          this.isAuth = this.auth.getAuthStateFromLocalStorage();
          this.router.navigate(['/']);
      },
      error => {
        this.generalService.setError();
        this.error = error.error.message;
      });
  }
}
