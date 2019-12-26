import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Product[] = [];

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
  loadData() {
    return this.products
  }
  addToCart(product) {
    window.alert(`Product ${product.title} has been added to cart`)
    this.products = this.products.filter(p => p.id !== product.id)
    this.items.push(product)
  }
  clearCart() {
    this.items = []
  }
}
