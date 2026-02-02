import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.sass'
})
export class GalleryComponent implements AfterViewInit {
  // Using placeholder images - replace with actual image URLs
  galleryItems = [
    { id: 1, title: 'Championship Victory', category: 'Competition', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop' },
    { id: 2, title: 'Training Session', category: 'Training', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop' },
    { id: 3, title: 'Team Celebration', category: 'Social', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop' },
    { id: 4, title: 'Award Ceremony', category: 'Awards', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
    { id: 5, title: 'Youth Program', category: 'Youth', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop' },
    { id: 6, title: 'Innovation Lab', category: 'Innovation', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop' },
    { id: 7, title: 'Community Event', category: 'Social', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop' },
    { id: 8, title: 'Elite Training', category: 'Training', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop' },
    { id: 9, title: 'Championship Finals', category: 'Competition', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop' },
    { id: 10, title: 'Team Building', category: 'Social', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop' },
    { id: 11, title: 'Match Day', category: 'Competition', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop' },
    { id: 12, title: 'Academy Graduation', category: 'Youth', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop' },
    { id: 13, title: 'Coaching Workshop', category: 'Training', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop' },
    { id: 14, title: 'Trophy Presentation', category: 'Awards', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
    { id: 15, title: 'Fan Meet & Greet', category: 'Social', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop' }
  ];

  selectedCategory = 'All';

  categories = ['All', 'Competition', 'Training', 'Social', 'Awards', 'Youth', 'Innovation'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Ensure items are visible first
    gsap.set('.gallery-item', { opacity: 1 });
    
    setTimeout(() => {
      gsap.utils.toArray('.gallery-item').forEach((item: any) => {
        gsap.set(item, { opacity: 0, scale: 0.8 });
        
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          ease: 'power3.out'
        });
      });
    }, 200);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }
}
