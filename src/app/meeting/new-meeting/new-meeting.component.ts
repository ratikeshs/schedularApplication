import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { Meeting } from 'src/app/model/meeting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})
export class NewMeetingComponent implements OnInit {

  public meetingData: any = {};
  public meeting: Meeting;
  public meetingStartTime: Time;
  public meetingEndTime: Time;
  public selectDate;
  public startTime: string;
  public endTime: string;
  public roomList: boolean = true;
  public rooms;
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};
  public attendee = [];
  public userIDArray: Array<number> = [];

  constructor(private apiService: ApiService, @Inject(LOCALE_ID) private locale: string, private router: Router) { }

  ngOnInit() {
    this.apiService.getattendees()
      .subscribe((res: any[]) => {
        console.log(res);
        this.dropdownList = res;
        console.log(this.dropdownList);
      });

    this.dropdownList = [];
    this.selectedItems = [];

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
    if (this.meetingData.startTime < this.meetingData.endTime) {
      this.selectDate = formatDate(this.meetingData.date, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectDate + " " + formatDate(this.meetingData.startTime, 'hh:mm:ss', this.locale));
      this.endTime = (this.selectDate + " " + formatDate(this.meetingData.endTime, 'hh:mm:ss', this.locale));
      this.roomList = false;
      this.apiService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
    }
  }

  onCreateNewMeetingButtonClicked(): void {
    for (var i = 0; i < this.selectedItems.length; i++) {
      this.userIDArray.push(this.selectedItems[i].userId);
    }

    this.meeting = (new Meeting(this.meetingData.meetingName, this.meetingData.organizerName, this.meetingData.agenda,
      this.userIDArray, this.meetingData.startTime, this.meetingData.endTime, (+this.meetingData.roomName)));
    this.apiService.createNewMeeting(this.meeting);
    this.router.navigate(['/meeting/list']);
  }
}
