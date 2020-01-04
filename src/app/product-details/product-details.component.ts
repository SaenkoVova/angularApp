import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService, Product } from '../services/cart.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public $product: Observable<Product>;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('productId');
    //  this.cartService.getProduct(id).subscribe(val => this.$product = val)
    this.$product = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.cartService.getProduct(params.get('productId')))
    );
  }
  
}
