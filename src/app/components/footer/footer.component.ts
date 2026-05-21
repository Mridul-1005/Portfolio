import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  socialLinks = [
    { icon: 'github', link: 'https://github.com/Mridul-1005' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/mahmudul-hasan-mridul-0a8119252' },
    { icon: 'email', link: 'mailto:mhmridul193@gmail.com' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}