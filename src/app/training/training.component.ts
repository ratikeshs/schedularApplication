import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Training } from 'src/app/model/Training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public trainings: Training[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTrainings().subscribe(
      (data: Training[]) => this.trainings = data
    );
  }
}
