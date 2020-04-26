import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {User} from '../models/User';
import {Router} from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {
    email: null,
    password: null,
    userId: null,
    token: null
  };
  constructor(
    private authService: AuthService,
    private route: Router
  ) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }
  signUp(email, password) {
    this.user.email = email;
    this.user.password = password;
    console.log(this.user);
    this.authService.signUp(this.user)
      .subscribe(
        data => {
          if (data.token && data.userId) {
            this.user.token = data.token;
            this.user.userId = data.userId;
            this.user.password = null;
            this.authService.setUser(this.user);
            this.route.navigate(['/']);
          }
        }
      );
  }

}
