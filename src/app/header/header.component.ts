import { Component, OnInit } from '@angular/core';
import { faPhone, faBox, faCartArrowDown, faHeart, faWindowClose, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

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
  constructor(public auth: AuthService) {}

  ngOnInit() {
  }
  toggleAuthVisible() {
    this.authVisible = !this.authVisible;
  }
}
