import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products = [];

  ngOnInit() {
    this.products = this.cartService.loadData()
  }
  share() {
    this.cartService.share()
  }
  onNotify() {
    this.cartService.onNotify()
  }

}
