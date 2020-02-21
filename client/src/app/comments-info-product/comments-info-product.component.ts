import { Component, OnInit } from '@angular/core';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-comments-info-product',
  templateUrl: './comments-info-product.component.html',
  styleUrls: ['./comments-info-product.component.css']
})
export class CommentsInfoProductComponent implements OnInit {

  product;

  constructor() { }

  ngOnInit() {

  }
  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
