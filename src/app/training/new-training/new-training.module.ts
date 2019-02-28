import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { NewTrainingComponent } from './new-training/new-training.component';
import { NewTrainingRoutingModule } from './new-training-routing.module';

@NgModule({
  declarations: [NewTrainingComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ToastrModule,
    NewTrainingRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ]
})

export class NewTrainingModule { }
