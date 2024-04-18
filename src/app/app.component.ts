import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parallaxOffset: number = 0;
  parallax2Offset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const isMobile = window.innerWidth <= 767; // Defina o limite de largura para dispositivos móveis conforme necessário

    if (isMobile) {
      this.parallaxOffset = window.pageYOffset * 0.9; // Ajuste o valor para dispositivos móveis
      this.parallax2Offset = window.pageYOffset * 0.1; // Ajuste o valor para dispositivos móveis
    } else {
      this.parallaxOffset = window.pageYOffset * 0.6; // Valor original para desktop
      this.parallax2Offset = window.pageYOffset * 0.1; // Valor original para desktop
    }
  }
}
