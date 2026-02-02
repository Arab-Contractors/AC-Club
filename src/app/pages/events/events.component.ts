import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DatePipe } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.sass'
})
export class EventsComponent implements AfterViewInit {
  upcomingEvents = [
    { 
      date: '2024-03-15', 
      title: 'Championship Finals', 
      location: 'Main Arena',
      time: '18:00',
      type: 'Competition',
      description: 'The ultimate showdown of the season',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-03-22', 
      title: 'Innovation Workshop', 
      location: 'Training Center',
      time: '14:00',
      type: 'Workshop',
      description: 'Learn cutting-edge techniques and strategies',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-04-05', 
      title: 'Community Day', 
      location: 'Club Grounds',
      time: '10:00',
      type: 'Social',
      description: 'A day of fun activities for the whole community',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-04-12', 
      title: 'Youth Tournament', 
      location: 'Youth Arena',
      time: '09:00',
      type: 'Tournament',
      description: 'Showcasing the next generation of talent',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-04-20', 
      title: 'Masterclass Series', 
      location: 'Conference Hall',
      time: '16:00',
      type: 'Education',
      description: 'Expert insights from industry leaders',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-05-01', 
      title: 'Annual Gala', 
      location: 'Grand Hall',
      time: '19:00',
      type: 'Celebration',
      description: 'Celebrating our achievements and milestones',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-05-10', 
      title: 'Summer Training Camp', 
      location: 'Training Facility',
      time: '08:00',
      type: 'Training',
      description: 'Intensive training program for all members',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
    },
    { 
      date: '2024-05-25', 
      title: 'Charity Match', 
      location: 'Main Stadium',
      time: '15:00',
      type: 'Social',
      description: 'Supporting local community causes',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop'
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
    gsap.set('.event-card', { opacity: 1 });
    
    setTimeout(() => {
      gsap.utils.toArray('.event-card').forEach((card: any, index: number) => {
        const startX = index % 2 === 0 ? -50 : 50;
        gsap.set(card, { opacity: 0, x: startX, scale: 0.9 });
        
        gsap.to(card, {
          opacity: 1,
          x: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)'
        });
      });
    }, 200);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
