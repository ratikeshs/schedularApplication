import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { Router } from '@angular/router';

import { Training } from 'src/app/model/Training';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  public trainingData: any = {};
  public training: Training;
  public trainingStartTime: Time;
  public trainingEndTime: Time;
  public startTime: string;
  public endTime: string;
  public selectDate;
  public rooms;
  public roomList: boolean = true;

  constructor(private apiService: ApiService, @Inject(LOCALE_ID) private locale: string, private router: Router) { }

  ngOnInit() {
  }

  formatTime(): void {
    if (this.trainingData.startTime < this.trainingData.endTime) {
      this.selectDate = formatDate(this.trainingData.startTime, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectDate + " " + formatDate(this.trainingData.startTime, 'hh:mm:ss', this.locale));
      this.endTime = (this.selectDate + " " + formatDate(this.trainingData.endTime, 'hh:mm:ss', this.locale));
      this.roomList = false;
      this.apiService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
    }
  }

  onCreateNewTrainingButtonClicked(): void {
    this.training = (new Training(this.trainingData.topic,
      this.trainingData.description,
      this.startTime,
      this.endTime,
      (+this.trainingData.roomName)));
    this.apiService.createNewTraining(this.training);
    this.router.navigate(['/training']);
  }
}
