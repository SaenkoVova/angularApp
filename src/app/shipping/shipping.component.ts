import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingDetails

  constructor(private shippingService: ShippingService) { }

  ngOnInit() {
    this.shippingDetails = this.shippingService.getShipping()
  }

}
