import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'src/app/model/meeting';

@Component({
  selector: "app-meeting-details",
  templateUrl: "./meeting-details.component.html",
  styleUrls: ["./meeting-details.component.css"]
})
export class MeetingDetailsComponent implements OnInit {
  public meetingDetails;
  public id: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.meetingDetails = Meeting;
    this.id = this.route.snapshot.params.id;
    this.apiService
      .getMeetingById(this.id)
      .subscribe(
        meeting => (this.meetingDetails = meeting ),
        response => console.log(response)
      );
  }
}
