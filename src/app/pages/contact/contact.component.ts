import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;

  contactInfo = [
    { icon: '📍', label: 'Address', value: '123 Club Street, City, Country' },
    { icon: '📧', label: 'Email', value: 'info@acclub.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '🕐', label: 'Hours', value: 'Mon-Fri: 9AM - 9PM' }
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Ensure elements are visible first
    gsap.set('.contact-info-item', { opacity: 1 });
    gsap.set('.form-group', { opacity: 1 });
    
    setTimeout(() => {
      gsap.utils.toArray('.contact-info-item').forEach((item: any) => {
        gsap.set(item, { opacity: 0, x: -50 });
        
        gsap.to(item, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          ease: 'power3.out'
        });
      });

      gsap.utils.toArray('.form-group').forEach((group: any) => {
        gsap.set(group, { opacity: 0, y: 30 });
        
        gsap.to(group, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          ease: 'power3.out'
        });
      });
    }, 200);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission here
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (control?.hasError('minlength')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is too short`;
    }
    return '';
  }
}
