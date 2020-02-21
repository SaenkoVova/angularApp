import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-characteristics-info-product',
  templateUrl: './characteristics-info-product.component.html',
  styleUrls: ['./characteristics-info-product.component.css']
})
export class CharacteristicsInfoProductComponent implements OnInit {

  product;
  constructor(
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.productsService.node$.subscribe(node => this.product = node);
  }
}
