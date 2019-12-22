import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(private route: ActivatedRoute, private productListService: ProductListComponent) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productListService.products[ +params.get('product.id')];
      
    })
  }

}
