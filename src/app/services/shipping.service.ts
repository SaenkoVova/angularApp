import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Shipping {
  type: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private httpClient: HttpClient) { }

  getShipping() {
    return this.httpClient.get('/assets/shipping.json')
  }
}
