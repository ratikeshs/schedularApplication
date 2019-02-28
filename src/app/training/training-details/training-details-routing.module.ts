import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingDetailsComponent } from './training-details/training-details.component';

const routes: Routes = [
  { path: 'training-details/:id', component: TrainingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsRoutingModule { }
