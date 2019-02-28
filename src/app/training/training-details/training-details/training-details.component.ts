import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Training } from 'src/app/model/Training';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  public trainingDetails;
  public id: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.trainingDetails = Training;
    this.id = this.route.snapshot.params.id;
    this.apiService.getTrainingById(this.id).subscribe((training) => this.trainingDetails = training as Training,
      (response) => console.log(response));
  }
}
