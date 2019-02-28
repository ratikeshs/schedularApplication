import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [TrainingDetailsComponent, AttendanceComponent, FeedbackComponent],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule
  ]
})
export class TrainingDetailsModule { }
