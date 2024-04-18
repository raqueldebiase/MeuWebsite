import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  parallaxOffset: number = 0;
  parallax2Offset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.parallaxOffset = window.pageYOffset * 0.7; // Ajuste o valor (0.7) para a velocidade desejada do parallax
    this.parallax2Offset = window.pageYOffset * 0.1; // Ajuste o valor (0.5) para a velocidade desejada do segundo parallax
  }
}
