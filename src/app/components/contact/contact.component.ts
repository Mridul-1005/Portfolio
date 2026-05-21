import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mhmridul193@gmail.com',
      link: 'mailto:mhmridul193@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+8801876963294',
      link: 'tel:+8801876963294'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: '@Mridul-1005',
      link: 'https://github.com/Mridul-1005'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'mahmudul-hasan-mridul',
      link: 'https://www.linkedin.com/in/mahmudul-hasan-mridul-0a8119252'
    }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', message: '' };
  }
}