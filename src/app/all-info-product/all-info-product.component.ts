import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { faAward, faClock, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';

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
  product = {
    id: ''
  };

  constructor(
   private route: ActivatedRoute,
   private productsService: ProductsService,
   private cartService: CartService
  ) { }

  ngOnInit() {
    this.generateProductInfo();
    this.addIdAfterReloading();
  }
  generateProductInfo() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product.id = id;
    this.productsService.getProduct(id).subscribe(data => {
      this.product = Object.assign(this.product, data);
    })
  }
  addToCart(product) {
    if(!this.cartService.hasId(product.id)) {
      this.cartService.addToCart(product);
      this.cartService.addToCartEvent(product);
    }
    this.cartService.addId(product.id);
  }
  addToCartInit(product) {
    this.cartService.addToCartEvent(product)
  }
  addIdAfterReloading() {
    if(!this.cartService.setAddedId.size) {
      const all = this.cartService.getProductFromLocalStorage();
      for (const item of all) {
        this.cartService.addId(item.id);
      }
    }
  }
}
