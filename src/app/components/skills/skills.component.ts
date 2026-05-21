import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Languages',
      icon: '💻',
      skills: ['C++', 'Java', 'JavaScript', 'Python']
    },
    {
      name: 'Frameworks',
      icon: '⚡',
      skills: ['Angular', 'Spring Boot', 'React', 'Node.js', 'Express.js']
    },
    {
      name: 'Databases',
      icon: '🗄️',
      skills: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      name: 'Tools',
      icon: '🔧',
      skills: ['Git', 'Postman', 'Vercel', 'REST APIs', 'Problem Solving', 'AI Integration']
    }
  ];
}