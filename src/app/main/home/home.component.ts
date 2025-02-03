import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { DisenosComponent } from '../disenos/disenos.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DisenosComponent, BlogComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('disenosSection') disenosSection!: ElementRef;
  @ViewChild('blogSection') blogSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onScroll();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const phone = document.querySelector('.scrolling-phone') as HTMLElement;
      if (phone) {
        let scrollPosition = window.scrollY;
        phone.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    }
  }

  scrollToSection(target: string) {
    let section: ElementRef | undefined;

    switch (target) {
      case 'disenos':
        section = this.disenosSection;
        break;
      case 'blog':
        section = this.blogSection;
        break;
      case 'contact':
        section = this.contactSection;
        break;
    }

    if (section) {
      section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
