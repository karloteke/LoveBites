import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-disenos',
  standalone: true,
  templateUrl: './disenos.component.html',
  styleUrls: ['./disenos.component.scss']
})
export class DisenosComponent implements AfterViewInit {
  currentSlide: number = 0;
  
  @ViewChild('slider') slider!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.slider) {
        console.error('Slider no encontrado');
        return;
      }
    }, 0);
  }

  moveSlide(direction: number): void {
    if (!this.slider?.nativeElement) return; // Evita errores si el elemento no está disponible aún

    const slides = this.slider.nativeElement.children;
    const totalSlides = slides.length;

    this.currentSlide = (this.currentSlide + direction + totalSlides) % totalSlides;
    const offset = this.currentSlide * -100; // Mueve las imágenes en el eje X

    this.slider.nativeElement.style.transition = 'transform 0.5s ease-in-out';
    this.slider.nativeElement.style.transform = `translateX(${offset}%)`;
  }
}
