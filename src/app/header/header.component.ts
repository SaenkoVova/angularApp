import { Component, OnInit } from '@angular/core';
import { faPhone, faBox, faCartArrowDown, faHeart, faWindowClose, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  faBox = faBox;
  faCartArrowDown = faCartArrowDown;
  faHeart = faHeart;
  faWindowClose = faWindowClose;
  faBriefcase = faBriefcase;
  phone = '0674470622';
  panelLable = 'Вітаємо, увійдіть в особистий кабінет';
  placeholder = 'Я шукаю';
  rememberMe = true;
  authVisible = false;
  cartVisible = false;
  cartCouter;
  checkoutForm;
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private cartService: CartService) {
      this.checkoutForm = this.formBuilder.group({
        email: '',
        password: ''
      })
    }

  ngOnInit() {
    setTimeout(function () {
      this.cartCouter = this.cartService.getCartProducts().length;
      alert(this.cartService.cartProducts.length)
    }, 2000)
  }
  toggleAuthVisible() {
    this.authVisible = !this.authVisible;
  }
  signInWithEmailEndPassword(userData) {
    this.auth.signInWithEmailAndPassword(userData.email, userData.password)
  }
  toggleCartVisible() {
    this.cartVisible = !this.cartVisible;
  }
}
