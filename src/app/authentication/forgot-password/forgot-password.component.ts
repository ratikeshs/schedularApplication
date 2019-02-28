import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordData = {};

  constructor(private authenticatioService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitButtonClicked() {
    this.authenticatioService.forgotPassword(this.forgotPasswordData);
  }
}
