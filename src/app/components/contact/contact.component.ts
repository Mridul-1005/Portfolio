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
    message: '',
    website: '' // honeypot field
  };

  loading = false;
  success = false;
  error: string | null = null;

  async onSubmit() {
    this.error = null;

    // basic client-side validation
    const { name, email, message, website } = this.formData as any;
    if (website && website.trim() !== '') {
      // honeypot filled — silently ignore
      return;
    }
    if (!name || !email || !message) {
      this.error = 'Please fill all required fields.';
      return;
    }

    this.loading = true;
    try {
      const resp = await fetch('https://formspree.io/f/xdajgodz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (resp.ok) {
        this.success = true;
        this.formData = { name: '', email: '', message: '', website: '' };
      } else {
        const data = await resp.json().catch(() => ({}));
        this.error = (data && data.error) || 'Failed to send message. Please try again later.';
      }
    } catch (err) {
      this.error = 'Network error. Please check your connection and try again.';
    } finally {
      this.loading = false;
    }
  }
}