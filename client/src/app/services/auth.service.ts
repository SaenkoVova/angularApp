import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }
  signUp(email, password) {
    const body = { email, password };
    return this.http.post('http://localhost:5000/api/auth/signUp', body);
  }
}
