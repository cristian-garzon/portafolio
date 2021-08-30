import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  pdf = "../../../assets/documents/curriculum vitae.pdf"
  constructor() { }

  ngOnInit(): void {
  }

}
