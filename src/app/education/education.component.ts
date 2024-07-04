import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'GRT Institute of Engineering and Technology, Tiruttani',
      course: 'Bachelor\'s Degree in Computer Science and Engineering',
      duration: '2019-2023',
      score: 'CGPA: 9.17',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
