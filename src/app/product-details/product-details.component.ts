import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.cartService.getProduct(id).subscribe(data => {
      this.product = data
    })
  }
  
}
