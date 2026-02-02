import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/teams', label: 'الفريق الأول' },
    { path: '/about', label: 'النادي' },
    { path: '/events', label: 'المباريات' },
    { path: '/gallery', label: 'الأخبار' },
    { path: '/contact', label: 'تواصل' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateNavbar();
    }
  }

  animateNavbar() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.nav-item', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    if (isPlatformBrowser(this.platformId) && this.isMobileMenuOpen) {
      gsap.from('.mobile-menu', {
        opacity: 0,
        x: -100,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
