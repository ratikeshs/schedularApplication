import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData = {};

  constructor(private authenticatioService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authenticatioService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res)
          this.router.navigate(['/training'])
        },
        err => console.log(err)
      )
    this.toastr.success('New training created successfully');

  }



}
