import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { Training } from 'src/app/model/Training';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})

export class EditTrainingComponent implements OnInit {

  public training: Training;
  public trainingStartTime: Time;
  public trainingEndTime: Time;
  public selectDate;
  public startTime: string;
  public endTime: string;
  public roomList: boolean = true;
  public rooms;
  public date: Date;
  public roomName: string;
  public editDetails;
  public id: number;
  public editTrainingDetails: Training;

  constructor(private apiService: ApiService, private route: ActivatedRoute, @Inject(LOCALE_ID) private locale: string,
    private router: Router) {

  }
  ngOnInit(): void {
    this.editDetails = Training;
    this.id = this.route.snapshot.params.id;
    this.apiService.getTrainingById(this.id).subscribe((training) => this.editDetails = training,
      (response) => console.log(response));
  }

  formatTime(): void {
    if (this.editDetails.startTime < this.editDetails.endTime) {
      this.selectDate = formatDate(this.editDetails.startTime, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectDate + " " + formatDate(this.editDetails.startTime, 'hh:mm:ss', this.locale));
      this.endTime = (this.selectDate + " " + formatDate(this.editDetails.endTime, 'hh:mm:ss', this.locale));
      this.roomList = false;
      this.apiService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
    }
  }

  onEditTrainingButtonClicked(id: number) {
    this.training = (new Training(this.editDetails.topic, this.editDetails.description,
      this.startTime, this.endTime, (+this.editDetails.roomId)));
    console.log(this.training);
    this.apiService.updateTraining(this.id, this.training);
    this.router.navigate(['/training']);
  }
}
