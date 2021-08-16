import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.service.list().subscribe(project => {
      this.projects = project
      console.log(this.projects);
    });
  }

}
