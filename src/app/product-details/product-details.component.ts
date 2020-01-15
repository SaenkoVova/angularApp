import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.getProduct(id).subscribe(data => {
      this.product = data
    })
  }
  
}
