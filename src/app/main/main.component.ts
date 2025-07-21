import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import AOS from 'aos';

import { HeaderComponent } from "./includes/header/header.component";
import { FooterComponent } from "./includes/footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy{

  constructor() { }

  ngOnInit(): void {
    this.initializeScrollEvents();
    this.initializeMobileNav();
    this.initializeScrollTopButton();
    this.initializeAOS();
    this.initializeIsotope();
    this.initializeSwiper();
    this.initializeFAQ();
    this.initializeNavmenuScrollspy();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    // Détacher les événements si nécessaire
    window.removeEventListener('scroll', this.toggleScrolled);
    window.removeEventListener('load', this.toggleScrolled);
  }

  // Gestion de l'événement scroll
  toggleScrolled(): void {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') && 
        !selectHeader?.classList.contains('sticky-top') && 
        !selectHeader?.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody?.classList.add('scrolled') : selectBody?.classList.remove('scrolled');
  }

  initializeScrollEvents(): void {
    window.addEventListener('scroll', this.toggleScrolled);
    window.addEventListener('load', this.toggleScrolled);
  }

  // Mobile nav toggle
  mobileNavToogle(): void {
    document.querySelector('body')?.classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToggleBtn?.classList.toggle('bi-list');
    mobileNavToggleBtn?.classList.toggle('bi-x');
  }

  initializeMobileNav(): void {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', this.mobileNavToogle);
    }
  }

  // Scroll top button
  toggleScrollTop(): void {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  initializeScrollTopButton(): void {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    window.addEventListener('load', this.toggleScrollTop);
    document.addEventListener('scroll', this.toggleScrollTop);
  }

  // Animation on scroll
  initializeAOS(): void {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Isotope Layout Initialization
  initializeIsotope(): void {
    // Ton code pour l'initialisation d'Isotope ici...
  }

  // Swiper sliders
  initializeSwiper(): void {
    // Ton code pour l'initialisation de Swiper ici...
  }

  // FAQ Toggle
  initializeFAQ(): void {
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem: any) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  }

  // Navmenu Scrollspy
  initializeNavmenuScrollspy(): void {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    window.addEventListener('load', () => this.navmenuScrollspy(navmenulinks));
    document.addEventListener('scroll', () => this.navmenuScrollspy(navmenulinks));
  }

  navmenuScrollspy(navmenulinks: NodeListOf<Element>): void {
    navmenulinks.forEach((navmenulink: any) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach((link: any) => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

}


