import { Component, OnInit, Injectable } from '@angular/core';

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

 @Injectable({providedIn: 'root'})
export class ProductListComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {id: 1, title: 'Phone XL', description: 'A large phone with one of the best screens', price: 100},
    {id: 2, title: 'Phone mini', description: 'A great phone with one of the best cameras', price: 200},
    {id: 3, title: 'Phone standard', description: '', price: 800}
  ]

  onNotify() {
    window.alert('You will be notified')
  }

  share() {
    window.alert('Product has been shared')
  }

  ngOnInit() {
  }

}
