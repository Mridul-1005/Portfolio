import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  education = [
    {
      degree: 'B.Sc. in Software Engineering',
      institution: 'Shahjalal University of Science and Technology, Sylhet',
      period: 'March 2022 – December 2025',
      grade: 'CGPA: 3.52 / 4.00',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt. Ananda Mohan College, Mymensingh',
      period: 'July 2018 – 2020',
      grade: 'GPA: 5.00 / 5.00',
      icon: '📚'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Swadeshi A.H.S High School, Mymensingh',
      period: '2018',
      grade: 'GPA: 5.00 / 5.00',
      icon: '🏫'
    }
  ];

  bio = `I'm a passionate Software Engineering student at SUST with a strong foundation in full-stack development.
  I specialize in building scalable web applications using Angular, React, Node.js, and Spring Boot.
  With 700+ problem-solving challenges solved, I have a solid grasp of algorithms and data structures.
  Currently working as a Software Engineer Intern at Leads Corporation Ltd., contributing to enterprise banking software.
  I'm always eager to learn new technologies and take on challenging projects.`;
}