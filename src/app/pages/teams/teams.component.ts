import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.sass'
})
export class TeamsComponent implements AfterViewInit {
  teams = [
    { 
      name: 'Elite Squad', 
      category: 'Competitive',
      description: 'Our premier competitive team competing at the highest levels',
      members: 25,
      achievements: '3x Champions',
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
    },
    { 
      name: 'Rising Stars', 
      category: 'Development',
      description: 'Young talents developing their skills for future competition',
      members: 30,
      achievements: '2x Regional Winners',
      icon: '⭐',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
    },
    { 
      name: 'Innovation Lab', 
      category: 'Research',
      description: 'Exploring new techniques and cutting-edge methodologies',
      members: 15,
      achievements: '5 Patents',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
    },
    { 
      name: 'Community Team', 
      category: 'Social',
      description: 'Building connections and fostering community spirit',
      members: 50,
      achievements: '100+ Events',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    { 
      name: 'Masters Division', 
      category: 'Veteran',
      description: 'Experienced members sharing knowledge and expertise',
      members: 20,
      achievements: '10+ Years',
      icon: '👑',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    { 
      name: 'Youth Academy', 
      category: 'Training',
      description: 'Nurturing the next generation of champions',
      members: 40,
      achievements: '200+ Graduates',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
    },
    { 
      name: 'Women\'s Team', 
      category: 'Competitive',
      description: 'Empowering female athletes to reach their full potential',
      members: 22,
      achievements: '2x League Winners',
      icon: '💪',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
    },
    { 
      name: 'Elite Coaches', 
      category: 'Staff',
      description: 'World-class coaching team with decades of experience',
      members: 12,
      achievements: '50+ Years Combined',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Ensure cards are visible first
    gsap.set('.team-card', { opacity: 1 });
    
    setTimeout(() => {
      gsap.utils.toArray('.team-card').forEach((card: any, index: number) => {
        // Set initial state
        gsap.set(card, { opacity: 0, y: 100, rotationY: 45 });
        
        // Animate in
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }, 200);
  }

  onCardHover(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const card = event.currentTarget as HTMLElement;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      z: 50,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  onCardLeave(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const card = event.currentTarget as HTMLElement;
    if (!card) return;
    
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      z: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
}
