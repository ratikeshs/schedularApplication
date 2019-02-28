import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: User = {
    firstName: null,
    lastName: null,
    email: '',
    password: null,
    // confirmPassword: null
  };

  constructor() { }

  ngOnInit() {
  }

}
