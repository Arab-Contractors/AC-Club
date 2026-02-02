import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent implements AfterViewInit {
  storyItems = [
    { year: '2015', title: 'Foundation', description: 'AC Club was founded with a vision to create excellence' },
    { year: '2017', title: 'First Championship', description: 'Our first major victory in regional competitions' },
    { year: '2019', title: 'Expansion', description: 'Opened new facilities and expanded our programs' },
    { year: '2022', title: 'National Recognition', description: 'Recognized as one of the top clubs nationally' },
    { year: '2024', title: 'Innovation Hub', description: 'Launched cutting-edge training programs' }
  ];

  values = [
    { icon: '🎯', title: 'Excellence', description: 'We strive for the highest standards in everything we do' },
    { icon: '💪', title: 'Dedication', description: 'Commitment to continuous improvement and growth' },
    { icon: '🚀', title: 'Innovation', description: 'Embracing new technologies and methodologies' },
    { icon: '❤️', title: 'Passion', description: 'Genuine love for what we do drives our success' },
    { icon: '🤝', title: 'Unity', description: 'Together we achieve more than we ever could alone' },
    { icon: '⭐', title: 'Integrity', description: 'Honesty and transparency in all our actions' }
  ];

  leadership = [
    { name: 'John Smith', role: 'Club President', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Sarah Johnson', role: 'Head Coach', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
    { name: 'Michael Brown', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Emily Davis', role: 'Youth Development', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Ensure elements are visible first
    gsap.set('.timeline-item', { opacity: 1 });
    gsap.set('.value-card', { opacity: 1 });
    gsap.set('.leader-card', { opacity: 1 });
    
    setTimeout(() => {
      // Timeline animation
      gsap.utils.toArray('.timeline-item').forEach((item: any, index: number) => {
        const startX = index % 2 === 0 ? -100 : 100;
        gsap.set(item, { opacity: 0, x: startX });
        
        gsap.to(item, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Value cards animation
      gsap.utils.toArray('.value-card').forEach((card: any) => {
        gsap.set(card, { opacity: 0, y: 50, scale: 0.8 });
        
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      });

      // Leadership cards animation
      gsap.utils.toArray('.leader-card').forEach((card: any) => {
        gsap.set(card, { opacity: 0, y: 50, scale: 0.8 });
        
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      });
    }, 200);
  }
}
