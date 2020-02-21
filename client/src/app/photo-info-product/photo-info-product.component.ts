import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-photo-info-product',
  templateUrl: './photo-info-product.component.html',
  styleUrls: ['./photo-info-product.component.css']
})
export class PhotoInfoProductComponent implements OnInit {

  product;
  imageIndex = 0;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.productsService.node$.subscribe(node => this.product = node);
  }

}
