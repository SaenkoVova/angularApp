import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../services/products.service';
import {Product} from '../models/Product';
import {NgprogressService} from '../services/ngprogress.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product: Product = {
    _id: null,
    title: null,
    price: null,
    discountPrice: null,
    imageUrl: null,
    quantity: null
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
    private productsService: ProductsService,
    private ngprogressService: NgprogressService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getActiveTab();
  }
  getProduct() {
    this.ngprogressService.ngProgressStart();
    this.route.params.subscribe(params => {
      const id = params.id;
      this.productsService.getProduct(id).subscribe(data => {
        this.product = data;
        this.productsService.addNode(data);
        this.ngprogressService.ngProgressComplete();
      });
    });
  }
  getActiveTab() {
    this.route.url.subscribe(() => {
      console.log(this.route.snapshot.firstChild.data);
      const childPath = this.route.snapshot.firstChild.data;
      if (childPath.path === '') {
        this.toggleTabActive(1);
      }
      if (childPath.path === 'characteristics') {
        this.toggleTabActive(2);
      }
      if (childPath.path === 'photo') {
        this.toggleTabActive(3);
      }
      if (childPath.path === 'comments') {
        this.toggleTabActive(4);
      }
    });
  }
  toggleTabActive(id) {
    for (const navigateItem of this.navigateItems) {
      navigateItem.id === id ? navigateItem.active = true : navigateItem.active = false;
    }
  }
}
