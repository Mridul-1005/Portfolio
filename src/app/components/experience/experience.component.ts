import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Leads Corporation Ltd.',
      period: 'December 2025 – Present',
      description: 'Contributing to enterprise banking software development by implementing and maintaining backend (Spring Boot) and frontend (Angular) features and database (Oracle). Working with modern frameworks and APIs to build scalable modules and support business requirements.',
      technologies: ['Angular', 'Spring Boot', 'Oracle', 'REST APIs'],
      type: 'current'
    }
  ];
}