import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('');
  private readonly roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Angular Developer',
    'Problem Solver'
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.typewriterEffect();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typewriterEffect() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.typedText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typewriterEffect(), 2000);
        return;
      }
    } else {
      this.typedText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    const typingSpeed = this.isDeleting ? 50 : 100;
    this.timeoutId = setTimeout(() => this.typewriterEffect(), typingSpeed);
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}