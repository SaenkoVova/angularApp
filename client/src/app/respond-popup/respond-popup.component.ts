import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../header/header.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-respond-popup',
  templateUrl: './respond-popup.component.html',
  styleUrls: ['./respond-popup.component.css']
})

export class RespondPopupComponent implements OnInit {

  @Output() toggleVisible = new EventEmitter();

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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.emailFormControl.setValue(this.authService.getAuthStateFromLocalStorage().email);
  }
  toggleVisibleEmit() {
    this.toggleVisible.emit();
  }
}
