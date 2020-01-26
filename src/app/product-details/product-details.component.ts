import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  public product = {
    id: ''
  };
  navigateItems = [
    {
      id: 1,
      title: 'Усе про товар',
      path: '',
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
  ]

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService) { }

  ngOnInit() {
    this.getProduct();
    this.findActiveTabAfterReloading();
  }
  findActiveTabAfterReloading() {
    this.route.url.subscribe(() => {
      const childRoute = this.route.snapshot.firstChild.routeConfig.path;
      for (const item of this.navigateItems) {
        if(childRoute === item.path) {
          item.active = true;
        }
      }
    })
  }
  toggleTabActive(id) {
    for (const navigateItem of this.navigateItems) {
      navigateItem.id == id ? navigateItem.active = true : navigateItem.active = false;
    }
  }
  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product.id = id;
    this.productsService.getProduct(id).subscribe(data => {
      this.product = Object.assign(this.product, data);
    })
  }
}
