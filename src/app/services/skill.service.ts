import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endPoint } from '../config/app';
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  protected endPoint = endPoint + '/Skill';
  protected header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(http: HttpClient) {}
}
