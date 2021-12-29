import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endPoint } from '../config/app';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  protected endPoint = endPoint + '/Mail';
  protected header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  public sendMessage(feedback: Feedback): Observable<void> {
    return this.http.post<void>(this.endPoint+'/send_mail',feedback,{headers:this.header});
  }
}
