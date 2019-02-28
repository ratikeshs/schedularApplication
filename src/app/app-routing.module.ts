import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { EditTrainingComponent } from './training/edit-training/edit-training.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'training',
    component: TrainingListComponent,
    canActivate: [AuthGuard]
  },


  { path: 'new-training', loadChildren: './training/new-training/new-training.module#NewTrainingModule',canActivate: [AuthGuard] },
  { path: 'edit-training/:id', component: EditTrainingComponent, canActivate: [AuthGuard] },
  { path: 'details-training', loadChildren: './training/training-details/training-details.module#TrainingDetailsModule', canActivate: [AuthGuard] },
  { path: 'meeting', loadChildren: './meeting/meeting.module#MeetingModule', canActivate: [AuthGuard] },
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
