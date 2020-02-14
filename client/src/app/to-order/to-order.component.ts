import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-to-order',
  templateUrl: './to-order.component.html',
  styleUrls: ['./to-order.component.css']
})
export class ToOrderComponent implements OnInit {

  checkoutForm

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: ''
    })
  }

  ngOnInit() {
  }

  order(customerData) {
    console.warn('Your order has been submited', customerData)
    this.checkoutForm.reset()
  }
}
