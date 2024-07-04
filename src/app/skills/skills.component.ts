import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Web Technologies - HTML, CSS, JavaScript, Typescript, Node Js,Bootstrap', level: 'Expert', rating: 85 },
    { name: 'Frameworks/Libraries - ANGULAR JS , Spring Boot', level: 'Intermediate', rating: 75 },
    { name: 'Programming Languages - JAVA', level: 'Expert', rating: 80 },
    { name: 'Databases - MySQL', level: 'Intermediate', rating: 70 },
    { name: 'Version Control Tools - GIT/GITHUB', level: 'Intermediate', rating: 90 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
