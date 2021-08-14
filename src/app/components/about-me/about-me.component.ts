import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { endPoint } from 'src/app/config/app';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {


  skill: Skill[] = [];
  url = endPoint + '/Skill/show_image/'

  constructor(private service: SkillService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.service.list().subscribe(skills => {
      this.skill = skills;
      console.log("debug");
      console.log(this.skill);
    }); 
  }

}
