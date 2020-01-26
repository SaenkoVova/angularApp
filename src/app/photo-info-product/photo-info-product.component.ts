import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-photo-info-product',
  templateUrl: './photo-info-product.component.html',
  styleUrls: ['./photo-info-product.component.css']
})
export class PhotoInfoProductComponent implements OnInit {

  product
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(data => {
      this.productsService.loadProductFromArray(data.id)
        .then(product => {
          this.product = product;
        });
    })
  }
}
