import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Meeting } from "src/app/model/meeting";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-meeting-list",
  templateUrl: "./meeting-list.component.html",
  styleUrls: ["./meeting-list.component.css"]
})
export class MeetingListComponent implements OnInit {
  meetings;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.apiService
      .getMeetings()
      .subscribe((data: Meeting[]) => (this.meetings = data));
  }

  onDetailsMeetingButtonClicked(id: number): void {
    this.router.navigate(['meeting/meeting-details', id]);
  }

  onEditMeetingButtonClicked(id: number): void {
    this.router.navigate(['meeting/edit-meeting', id]);
  }

  onDeleteMeetingButtonClicked(id: number): void {
    this.apiService.deleteMeeting(id).subscribe((res) => {
      console.log("deleted", id);
    });
  }
}
