import { Component, OnInit } from '@angular/core';
import { faBars, faBox, faCartArrowDown, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faBox = faBox;
  faCartArrowDown = faCartArrowDown;
  faHeart = faHeart;
  phone = '0674470622';
  panelLable = 'Вітаємо, увійдіть в особистий кабінет';
  placeholder = 'Я шукаю';

  constructor() {}

  ngOnInit() {
  }

}
