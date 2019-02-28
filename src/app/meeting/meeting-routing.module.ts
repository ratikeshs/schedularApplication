import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeetingListComponent } from "./meeting-list/meeting-list.component";
import { NewMeetingComponent } from "./new-meeting/new-meeting.component";
import { MeetingDetailsComponent } from "./meeting-details/meeting-details.component";
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';

const routes: Routes = [
  { path: "", component: MeetingListComponent },
  { path: "list", component: MeetingListComponent },
  { path: "new-meeting", component: NewMeetingComponent },
  { path: "meeting-list", component: MeetingListComponent },
  { path: "edit-meeting/:id", component: EditMeetingComponent },
  { path: "meeting-details/:id", component: MeetingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule {}
