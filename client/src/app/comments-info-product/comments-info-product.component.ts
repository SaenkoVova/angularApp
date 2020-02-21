import { Component, OnInit } from '@angular/core';
import {StarRatingComponent} from 'ng-starrating';
import {CommentsService} from '../services/comments.service';
import {Comment} from '../models/Comment';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../header/header.component';
import {ProductsService} from '../services/products.service';
import {AuthService} from '../services/auth.service';
import {NgprogressService} from '../services/ngprogress.service';


@Component({
  selector: 'app-comments-info-product',
  templateUrl: './comments-info-product.component.html',
  styleUrls: ['./comments-info-product.component.css']
})
export class CommentsInfoProductComponent implements OnInit {

  comments: Comment[] = [];
  comment: Comment;
  product;
  error: string;
  rating = 0;
  respondPopupVisible = false;

  commentFormControl = new FormControl('', [
    Validators.required
  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private commentsService: CommentsService,
    private productsService: ProductsService,
    private authService: AuthService,
    private ngprogressService: NgprogressService
  ) { }

  ngOnInit() {
    this.loadComments();
    this.getProduct();
    this.emailFormControl.setValue(this.authService.getAuthStateFromLocalStorage().email);
  }
  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    this.rating = $event.newValue;
  }

  loadComments() {
      this.commentsService.getComments()
        .subscribe(
          (comments) => {
            this.comments = comments;
          },
          (error) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }
  getProduct() {
    this.productsService.node$.subscribe(node => {
      this.product = node;
    });
  }
  doComment(comment, name) {
    this.ngprogressService.ngProgressStart();
    this.comment = {
      userId: this.authService.getAuthStateFromLocalStorage().userId || '',
      productId: this.product._id,
      username: name,
      text: comment,
      email: this.authService.getAuthStateFromLocalStorage().email || this.emailFormControl.value,
      rating: this.rating,
    };
    this.commentsService.doComment(this.comment)
      .subscribe(data => {
        console.log(data);
        this.loadComments();
        this.commentFormControl.setValue('');
        this.nameFormControl.setValue('');
        this.rating = 0;
        this.ngprogressService.ngProgressComplete();
      });
  }
  toggleVisible() {
    this.respondPopupVisible = !this.respondPopupVisible;
  }
}
