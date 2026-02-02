import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit, AfterViewInit {
  leagueTable = [
    { position: 1, name: 'بيراميدز', points: 45, highlight: false },
    { position: 2, name: 'الأهلي', points: 42, highlight: false },
    { position: 3, name: 'الزمالك', points: 40, highlight: false },
    { position: 4, name: 'المقاولون العرب', points: 38, highlight: true },
    { position: 5, name: 'الإسماعيلي', points: 35, highlight: false },
    { position: 6, name: 'الاتحاد', points: 32, highlight: false }
  ];

  quickLinks = [
    { label: 'فيسبوك', icon: 'f', href: '#' },
    { label: 'تويتر', icon: '𝕏', href: '#' },
    { label: 'انستغرام', icon: '📷', href: '#' },
    { label: 'يوتيوب', icon: '▶', href: '#' }
  ];

  topScorers = [
    { rank: 1, name: 'أحمد حسن', goals: 12 },
    { rank: 2, name: 'محمد صلاح', goals: 9 },
    { rank: 3, name: 'كريم بيكهام', goals: 7 },
    { rank: 4, name: 'عمر جابر', goals: 5 },
    { rank: 5, name: 'ياسر إبراهيم', goals: 4 }
  ];

  galleryPreview = [
    { src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=120&h=80&fit=crop', alt: 'المباراة' },
    { src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=120&h=80&fit=crop', alt: 'الاحتفال' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop', alt: 'التدريب' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=80&fit=crop', alt: 'الجماهير' }
  ];

  siteLinks = [
    { label: 'التذاكر', icon: '🎫', href: '#' },
    { label: 'المتجر الرسمي', icon: '🛒', href: '#' },
    { label: 'العضوية', icon: '👤', href: '#' },
    { label: 'التطبيق', icon: '📱', href: '#' }
  ];

  latestResults = [
    {
      team1Logo: 'https://via.placeholder.com/48/FFD700/000000?text=M',
      score: '2 - 1',
      team2Logo: 'https://via.placeholder.com/48/333333/FFFFFF?text=A',
      competition: 'الدوري',
      date: '29 ديسمبر'
    },
    {
      team1Logo: 'https://via.placeholder.com/48/FFD700/000000?text=M',
      score: '0 - 0',
      team2Logo: 'https://via.placeholder.com/48/333333/FFFFFF?text=Z',
      competition: 'الدوري',
      date: '20 ديسمبر'
    },
    {
      team1Logo: 'https://via.placeholder.com/48/FFD700/000000?text=M',
      score: '3 - 1',
      team2Logo: 'https://via.placeholder.com/48/333333/FFFFFF?text=E',
      competition: 'الدوري',
      date: '29 ديسمبر'
    }
  ];

  videoPlaylist = [
    { title: 'أهداف المباراة', duration: '03:07', thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=225&fit=crop' },
    { title: 'ملخص المباراة', duration: '02:45', thumbnail: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=225&fit=crop' },
    { title: 'تصريحات اللاعبين', duration: '01:41', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop' },
    { title: 'خلف الكواليس', duration: '05:17', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=225&fit=crop' }
  ];

  clubNews = [
    { title: 'الهيئة العليا المصرية', date: '30 ديسمبر', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=250&fit=crop', hasVideo: true },
    { title: 'سباقة حاصل ابتناقية', date: '17 ديسمبر', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=250&fit=crop', hasVideo: false },
    { title: 'النادية من السطلي', date: '30 ديسمبر', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=250&fit=crop', hasVideo: false },
    { title: 'الكبيادل مصحب ميناقتنا', date: '30 ديسمبر', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop', hasVideo: false }
  ];

  categories = [
    { title: 'الفريق الأول', icon: '', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=300&fit=crop' },
    { title: 'الأكاديمية', icon: '🏆', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=300&fit=crop' },
    { title: 'المصوبة', icon: '', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop' },
    { title: 'المتجر', icon: '🛒', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop' }
  ];

  partners = [
    { name: 'Ezz Steel', logo: 'https://via.placeholder.com/100x36/1a1a1a/F7C42F?text=Ezz' },
    { name: 'Czierei', logo: 'https://via.placeholder.com/100x36/1a1a1a/F7C42F?text=Czierei' },
    { name: 'OPPO', logo: '' },
    { name: 'MBC Masr', logo: 'https://via.placeholder.com/100x36/1a1a1a/F7C42F?text=MBC' }
  ];

  stats = [
    { value: '5', label: 'بطولات الدوري' },
    { value: '12', label: 'كأس مصر' },
    { value: '45+', label: 'موسم في الدوري' },
    { value: '3', label: 'بطولات أفريقية' }
  ];

  upcomingMatches = [
    { day: '15', month: 'يناير', homeTeam: 'المقاولون العرب', awayTeam: 'الإسماعيلي', venue: 'استاد المقاولون' },
    { day: '22', month: 'يناير', homeTeam: 'المقاولون العرب', awayTeam: 'بيراميدز', venue: 'استاد المقاولون' },
    { day: '29', month: 'يناير', homeTeam: 'الأهلي', awayTeam: 'المقاولون العرب', venue: 'استاد القاهرة' }
  ];

  galleryImages = [
    { src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=300&fit=crop', alt: 'المباراة' },
    { src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop', alt: 'الاحتفال' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', alt: 'التدريب' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', alt: 'الجماهير' },
    { src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop', alt: 'الملعب' },
    { src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=300&fit=crop', alt: 'الهداف' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
      gsap.from('.hero-content', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power3.out' });
      ['.card', '.featured-main', '.result-row', '.quick-link', '.cat-card', '.stat-item', '.match-card', '.gallery-item'].forEach(sel => {
          gsap.utils.toArray(sel).forEach((el: any) => {
            gsap.from(el, {
              opacity: 0,
              y: 30,
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
              duration: 0.6,
              ease: 'power3.out'
            });
          });
        });
      }, 100);
    }
  }
}
