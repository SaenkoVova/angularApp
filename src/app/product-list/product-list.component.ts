import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products: Product[];

  ngOnInit() {
    this.cartService.getProducts().subscribe(items => {
      this.products = items;
    });
  }
 
  
}
