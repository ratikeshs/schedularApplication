import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Training } from 'src/app/model/Training';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})

export class TrainingListComponent implements OnInit {

  public trainings;

  constructor(private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.apiService.getTrainings().subscribe(
      (data: Training[]) => this.trainings = data
    );
  }

  onEditTrainingButtonClicked(id: number): void {
    this.router.navigate(['edit-training', id]);
  }

  onDetailsTrainingButtonClicked(id: number): void {
    this.router.navigate(['details-training/training-details/', id]);
    this.toastr.success('Training Created successfully ', 'Toastr fun!');
  }

  onDeleteTrainingButtonClicked(id: number): void {
    this.apiService.deleteTraining(id).subscribe((res) => {
      console.log("deleted", id);
    });
  }
}
