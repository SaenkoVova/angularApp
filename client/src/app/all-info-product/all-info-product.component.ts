import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { faAward, faClock, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import {NgprogressService} from '../services/ngprogress.service';

@Component({
  selector: 'app-all-info-product',
  templateUrl: './all-info-product.component.html',
  styleUrls: ['./all-info-product.component.css']
})
export class AllInfoProductComponent implements OnInit {

  faCloud = faAward;
  faClock = faClock;
  faCartPlus = faCartPlus;
  faHeart = faHeart;
  product;

  constructor(
   private route: ActivatedRoute,
   private productsService: ProductsService,
   public cartService: CartService,
   private ngProgress: NgprogressService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.addIdAfterReloading();
  }
  getProduct() {
    this.ngProgress.ngProgressComplete();
    this.ngProgress.ngProgressStart();
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(data => {
        this.product = data.product;
        this.ngProgress.ngProgressComplete();
      });
  }
  addToCart(product) {
    if (!this.cartService.hasId(product._id)) {
      this.cartService.addToCart(product);
      this.cartService.addToCartEvent(product);
    }
    this.cartService.addId(product._id);
  }
  addToCartInit(product) {
    this.cartService.addToCartEvent(product);
  }
  addIdAfterReloading() {
    if (!this.cartService.setAddedId.size) {
      const all = this.cartService.getProductFromLocalStorage();
      for (const item of all) {
        this.cartService.addId(item._id);
      }
    }
  }
}
