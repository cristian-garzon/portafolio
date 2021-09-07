import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { endPoint } from 'src/app/config/app';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  url = endPoint + '/Project/show_images/'

  constructor(private service: ProjectService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.service.list().subscribe(project => {
      this.projects = project;
    });

  }
  public repository(project: Project):void{
    window.open(project.urlRepo, "_blank");
  }
  public webSite(project: Project):void{
    window.open(project.webSite, "_blank");
  }
}
