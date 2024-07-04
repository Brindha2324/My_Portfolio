import { Component, OnInit } from '@angular/core';
import { Internship, Certification } from '../models/models';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  workExpList: Internship[] = [
    {
      role: 'Frontend Development Intern',
      company: 'Aspire Systems',
      duration: 'Jan 2023 - March 2023',
      description: [
        'Position Title: Frontend Development',
        'Company Name: Aspire Systems',
        'Duration: 3 Months',
      ],
    }
  ];

  certifications: Certification[] = [
    {
      title: 'Java Fullstack Course',
      institution: 'Besant Technologies, Chennai',
      details: [
        'Completed Java Fullstack course',
        'Learned Spring Boot framework',
        'Frontend development with Angular',
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
