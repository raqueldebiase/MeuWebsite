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

  constructor(){

  }

  ngOnInit(): void {
    
  }

  parallaxOffset: number = 0;
  parallax2Offset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.parallaxOffset = window.pageYOffset * 0.7; // Ajuste o valor (0.7) para a velocidade desejada do parallax
    this.parallax2Offset = window.pageYOffset * 0.2; // Ajuste o valor (0.5) para a velocidade desejada do segundo parallax
  }

}
