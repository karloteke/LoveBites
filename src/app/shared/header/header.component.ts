import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      // Ajuste para un encabezado fijo
      const headerOffset = 60; // Ajusta este valor a la altura de tu header
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  } 
} 