import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'BRINDHA P'],
    ['Phone', '+91-8148158580'],
    ['Email', 'brindhapalani0910@gmail.com'],
    ['Location', 'Tiruttani, Thiruvallur'],
  ];

  aboutMe: string[] = [
    'A recent Bachelor of Engineering in Computer Science graduate eager to launch a career as a software developer.',
    'Passionate about coding and problem-solving, I aim to contribute my skills and enthusiasm to a dynamic team, while continuously learning and growing in software development.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
