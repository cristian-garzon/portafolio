import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoint } from '../config/app';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  protected endPoint = endPoint + '/Skill';
  protected header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(http: HttpClient) { }
}
