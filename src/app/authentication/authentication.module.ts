import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from 'src/app/shared/confirm-equal-validator.directive';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenInterceptorService } from 'src/app/shared/token-interceptor.service'
import { AuthGuard } from 'src/app/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ConfirmEqualValidatorDirective
  ],

  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ToastrModule
  ],

  providers: [ AuthenticationService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    } 
  ]
})
export class AuthenticationModule { }
