import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Detection of Misbehavior Activity As a CopyCat Node in WSN to Enhance the network security',
      technologies: 'Java, MySQL',
      description: [
        'The project focuses on identifying and mitigating misbehavior in wireless sensor networks by detecting copycat nodes, thereby bolstering network security.',
        'Technologies: Java, MySQL',
        'Algorithms used: Distributed Hash Table, Chord Algorithm, RSA Algorithm'
      ],
      githubLink: 'https://github.com/your-repo-link'
    },
    {
      title: 'Angular App Portfolio Website',
      technologies: 'Angular, Angular Material',
      description: [
        'This application is part of the Angular App portfolio website.',
        'Built with Angular and Angular Material for modern UI/UX design.'
      ],
      githubLink: 'https://github.com/your-repo-link'
    },
    {
      title: 'Employee Management System',
      technologies: 'Java, JFrame, MySQL',
      description: [
        'Developed an Employee Management System using JFrame for GUI and JDBC for database connectivity.',
        'Features include employee registration and login, updating details, and viewing records.'
      ],
      githubLink: 'https://github.com/your-repo-link'
    },
    {
      title: 'MedxTotalCare - SpringBoot Application',
      technologies: 'Spring Boot, MySQL, JSP',
      description: [
        'A comprehensive healthcare management application using Spring Boot.',
        'Includes features for pharmacy, optical, doctors home visits, pre-medical check-ups, insurance services, home sample collection, and medication refill.'
      ],
      githubLink: 'https://github.com/your-repo-link'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
