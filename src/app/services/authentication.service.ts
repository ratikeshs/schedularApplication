import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public formData: User;

  constructor(private httpClient: HttpClient, private router: Router) { }

  registerUser(user) {
   console.log(user);
     return this.httpClient.post<any>('http://localhost:54203/api/Registrations', user);
  }

  loginUser(user) {
    console.log(user);
    return this.httpClient.post<any>('http://localhost:54203/api/Logins', user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/authentication/login']);
  }

  forgotPassword(email) {
    return this.httpClient.post<any>('http://localhost:54203/api/Logins', email);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}


