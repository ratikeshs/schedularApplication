import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, EmailValidator } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {
    firstName: null,
    lastName: null,
    email: '',
    password: null
  };

  userRegistrationFormData : User;



  registerUserData: {  }

  constructor(private authinticationService: AuthenticationService) { }

  ngOnInit() {

  }

  onRegisterButtonClicked() {
    this.userRegistrationFormData=(new User(this.user.firstName,this.user.lastName,this.user.email,this.user.password));
   
    this.authinticationService.registerUser(this.userRegistrationFormData).subscribe(
      res => {
        localStorage.setItem('token',res)
      },
      err => console.log(err)
    )
  }

}
