import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'portfolio';
  name = '';
  email = '';
  interest = '';
  message= '';

  constructor(){}

  ngOnInit(): void {}

  parallaxOffset: number = 0;
  parallax2Offset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Verifica se o dispositivo é um dispositivo móvel
    const isMobile = window.innerWidth <= 768; // Você pode ajustar este valor conforme necessário

    // Ajusta os valores de parallax de acordo com o tipo de dispositivo
    if (isMobile) {
      this.parallaxOffset = window.pageYOffset * 0.9; // Ajuste o valor para uma velocidade mais lenta no parallax
      this.parallax2Offset = window.pageYOffset * 0.3; // Ajuste o valor para uma velocidade mais lenta no segundo parallax
    } else {
      this.parallaxOffset = window.pageYOffset * 0.6; // Valor original para dispositivos desktop
      this.parallax2Offset = window.pageYOffset * 0.1; // Valor original para dispositivos desktop
    }
  }
}
