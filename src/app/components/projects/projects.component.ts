import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private service: ProjectService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.service.list().subscribe(project => {
      this.projects = project;
    });
  }
  public repository(project: Project):void{
    console.log(project.urlRepo);
    window.open(project.urlRepo, "_blank");
  }
}
