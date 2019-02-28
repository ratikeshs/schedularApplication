import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AuthGuard } from './auth.guard';
import { TrainingComponent } from './training/training.component';
import { HeaderComponent } from './header/header.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { EditTrainingComponent } from './training/edit-training/edit-training.component';
import { HttpErrorInterceptor } from 'src/app/shared/http-error.interceptor';
import { TokenInterceptorService } from 'src/app/shared/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    HeaderComponent,
    TrainingListComponent,
    EditTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({ toastClass: 'toast toast-bootstrap-compatibility-fix' })
  ],

  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
