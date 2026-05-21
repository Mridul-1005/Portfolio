import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'TuitionBD',
      description: 'A MERN-based tuition management platform with JWT authentication and role-based access. Built with Node.js/Express.js using MVC architecture.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      github: 'https://github.com/Mridul-1005/Project-350',
      icon: '📚'
    },
    {
      name: 'Personal Book List',
      description: 'A full-stack CRUD web application for managing a personalized reading list. Features React frontend with styled components and Express.js backend.',
      tech: ['React', 'Express.js', 'SQL'],
      github: 'https://github.com/Mridul-1005/Personal-Book-List',
      icon: '📖'
    },
    {
      name: 'Gemini 2.0 App',
      description: 'A JavaScript-based frontend project replicating AI assistant functionality with a responsive chat interface communicating with Gemini API.',
      tech: ['React.js', 'Gemini API', 'JavaScript'],
      github: 'https://github.com/Mridul-1005/Gemini2.0-app',
      icon: '🤖'
    },
    {
      name: 'Car Racing Game',
      description: 'A Java Swing-based car racing game with event listeners for user input and collision detection system for obstacle interaction.',
      tech: ['Java Swing', 'Eclipse IDE'],
      github: 'https://github.com/nafi-ullah/Racing-Game',
      icon: '🏎️'
    }
  ];
}