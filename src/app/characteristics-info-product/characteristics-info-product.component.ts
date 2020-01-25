import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-characteristics-info-product',
  templateUrl: './characteristics-info-product.component.html',
  styleUrls: ['./characteristics-info-product.component.css']
})
export class CharacteristicsInfoProductComponent implements OnInit {

  product
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    
  }

  ngOnInit() {
    this.route.parent.params.subscribe(data => {
      this.productsService.getProduct(data.id).subscribe(product => {
        this.product = product;
        console.log(this.product)
      })
    })
  }

}
