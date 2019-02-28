import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { AuthenticationService } from 'src/app/services/authentication.service'; 

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req, next) {
    // let authenticationService = this.injector.get(AuthenticationService)
    // console.log(`Bearer ${this.authenticationService.getToken()}`);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
