import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endPoint } from '../config/app';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  protected endPoint = endPoint + '/Skill';
  protected header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  public list(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.endPoint+'/list'); 
  }
}
