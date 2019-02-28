import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { MeetingDetailsComponent } from "./meeting-details/meeting-details.component";
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { NewMeetingComponent } from "./new-meeting/new-meeting.component";
import { MeetingListComponent } from "./meeting-list/meeting-list.component";
import { MeetingRoutingModule } from "src/app/meeting/meeting-routing.module";


@NgModule({
  declarations: [
    NewMeetingComponent,
    MeetingListComponent,
    MeetingDetailsComponent,
    EditMeetingComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class MeetingModule {}
