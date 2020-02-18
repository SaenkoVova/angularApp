import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  isAuthorized = this.getAuthStateFromLocalStorage().isAuth;

  constructor(private http: HttpClient) {
  }
   signUp(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<User>('/api/auth/signup', user, httpOptions);
  }
  signIn(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('/api/auth/signin', user, httpOptions);
  }

  setUser(user: User): void {
    user.isAuth = true;
    localStorage.setItem('auth', JSON.stringify(user));
  }
  getAuthStateFromLocalStorage() {
    return JSON.parse(localStorage.getItem('auth') || '{}');
  }

  getAuthState(): Observable<boolean> {
    return this.isAuthorized;
  }
}
