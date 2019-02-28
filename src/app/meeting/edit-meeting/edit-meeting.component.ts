import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { Meeting } from 'src/app/model/meeting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  public meeting: Meeting;
  public meetingName: string;
  public organizerName: string;
  public agenda: string;
  public attendeeList: string;
  public trainingStartTime: Time;
  public trainingEndTime: Time;
  public selectDate;
  public startTime: string;
  public endTime: string;
  public roomList: boolean = true;
  public rooms;
  public editDetails;
  public id: number;
  public editTrainingDetails: Meeting;
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};
  public attendee = [];
  public userIDArray: Array<number> = [];
  public meetingDetails: Array<Meeting> = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, @Inject(LOCALE_ID) private locale: string,
    private router: Router) { }

  ngOnInit() {
    this.selectedItems = [];
    this.editDetails = Meeting;
    this.id = this.route.snapshot.params.id;

    this.apiService.getMeetingById(this.id).subscribe((meeting) => this.editDetails = meeting as Meeting,
      (response) => console.log(response));
    this.selectedItems.push(this.editDetails.attendeeList);

    this.apiService.getattendees()
      .subscribe((res: any[]) => {
        console.log(res);
        this.dropdownList = res;
        console.log(this.dropdownList);
      });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'userId',
      textField: 'userName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  formatTime(): void {
    if (this.editDetails.startTime < this.editDetails.endTime) {
      this.selectDate = formatDate(this.editDetails.startTime, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectDate + " " + formatDate(this.editDetails.startTime, 'hh:mm:ss', this.locale));
      this.endTime = (this.selectDate + " " + formatDate(this.editDetails.endTime, 'hh:mm:ss', this.locale));
      console.log(this.startTime, this.endTime);
      this.roomList = false;
      this.apiService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
    }
  }

  onSubmitButtonClicked(id: number) {
    for (var i = 0; i < this.selectedItems.length; i++) {
      this.userIDArray.push(this.selectedItems[i].userId);
    }

    this.meeting = (new Meeting(this.editDetails.meetingName, this.editDetails.organizerName, this.editDetails.agenda, this.userIDArray,
      this.startTime, this.endTime, (+this.editDetails.roomId)));
    this.apiService.updateMeeting(this.id, this.meeting);
    this.router.navigate(['/meeting/list']);
  }

}
