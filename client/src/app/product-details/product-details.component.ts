import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product: Product = {
    id: null,
    title: null,
    price: null,
    discountPrice: null,
    imageUrl: null,
    quantity: null,
    orderQuantity: null,
    sum: null
  };
  navigateItems = [
    {
      id: 1,
      title: 'Усе про товар',
      path: '/',
      active: false
    },
    {
      id: 2,
      title: 'Характеристики',
      path: 'characteristics',
      active: false
    },
    {
      id: 3,
      title: 'Фото',
      path: 'photo',
      active: false
    },
    {
      id: 4,
      title: 'Відгуки',
      path: 'comments',
      active: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product.id = id;
    // this.productsService.getProduct(id).subscribe(data => {
    //   this.product = Object.assign(this.product, data);
    // });
  }
  toggleTabActive(id) {
    for (const navigateItem of this.navigateItems) {
      navigateItem.id === id ? navigateItem.active = true : navigateItem.active = false;
    }
  }
}
