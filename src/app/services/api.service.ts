import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Meeting } from '../model/meeting';
import { Training } from '../model/Training';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  formData: Training;
  meetingFormData: Meeting;


  constructor(private httpClient: HttpClient) { }

  /*
       All Training APIs bellow

   */

  public createNewTraining(training) {
    return this.httpClient.post<any>('http://localhost:54203/api/Trainings', training)
      .subscribe();
  }

  getTrainings(): Observable<Training[]> {
    return this.httpClient.get<Training[]>('http://localhost:54203/api/Trainings');
  }

  public deleteTraining(id: number) {
    return this.httpClient.delete('http://localhost:54203/api/Trainings/' + id);
  }

  updateTraining(id, training) {
    return this.httpClient.put('http://localhost:54203/api/Trainings/' + id, training).subscribe();
  }

  public getTrainingById(id: number) {
    return this.httpClient.get('http://localhost:54203/api/Trainings/' + id);
  }


  /*

    All Meeting APIs bellow

  */

  public createNewMeeting(meeting: Meeting) {
    return this.httpClient
      .post('http://localhost:54203/api/Meetings', meeting)
      .subscribe();
  }

  getMeetings(): Observable<Meeting[]> {
    return this.httpClient.get<Meeting[]>('http://localhost:54203/api/Meetings');
  }

  public getMeetingById(id: number) {
    return this.httpClient.get('http://localhost:54203/api/Meetings/' + id);
  }

  public deleteMeeting(id: number) {
    return this.httpClient.delete('http://localhost:54203/api/Meetings/' + id);
  }

  updateMeeting(id, meeting) {
    return this.httpClient.put('http://localhost:54203/api/Meetings/' + id, meeting).subscribe();
  }

  /* 
  
    Common APIs below
  
  */
 
  public getRooms(startTime, endTime) {
    return this.httpClient.post<any>('http://localhost:54203/api/Rooms/', { startTime, endTime });
  }

  getattendees() {
    return this.httpClient.get('http://localhost:54203/api/Users');
  }

}
