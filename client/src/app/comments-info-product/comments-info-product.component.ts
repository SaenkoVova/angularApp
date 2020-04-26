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
  commentId;

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
    private ngprogressService: NgprogressService,
  ) { }

  ngOnInit() {
    this.getProduct();
    this.emailFormControl.setValue(this.authService.getAuthStateFromLocalStorage().email);
  }
  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    this.rating = $event.newValue;
  }

  loadComments(id) {
      this.commentsService.getComments(id)
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
      if (Object.keys(this.product).length) {
        console.log(this.product._id);
        this.loadComments(this.product._id);
      }
    });
  }
  doComment(comment, name) {
    if (this.authService.getAuthStateFromLocalStorage().isAuth) {
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
          this.loadComments(this.product._id);
          this.commentFormControl.setValue('');
          this.nameFormControl.setValue('');
          this.rating = 0;
          this.ngprogressService.ngProgressComplete();
        });
    } else {
      this.commentsService.doCommentEvent();
    }
  }
  toggleVisible(commentId?) {
    this.commentId = commentId;
    this.respondPopupVisible = !this.respondPopupVisible;
  }
}
