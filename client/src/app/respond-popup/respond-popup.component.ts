import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../header/header.component';
import {AuthService} from '../services/auth.service';
import {Respond} from '../models/Respond';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-respond-popup',
  templateUrl: './respond-popup.component.html',
  styleUrls: ['./respond-popup.component.css']
})

export class RespondPopupComponent implements OnInit {

  @Output() toggleVisible = new EventEmitter();
  @Input() commentId: string;

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
    private authService: AuthService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.emailFormControl.setValue(this.authService.getAuthStateFromLocalStorage().email);
  }
  toggleVisibleEmit() {
    this.toggleVisible.emit();
  }
  doRespond(email, comment, name) {
    const respond: Respond = {
      email,
      text: comment,
      name,
      commentId: this.commentId
    };
    this.commentsService.doRespond(respond)
      .subscribe(data => {
        console.log(data);
        this.toggleVisibleEmit();
      });
  }
}
