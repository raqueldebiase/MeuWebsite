import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//AfterViewInit: interface do Angular que fornece um gancho de ciclo de vida chamado 'ngAfterViewInit'. Esse método é chamado após a visualização do componente ser totalmente inicializada.

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})

//Definição de classe: 

export class SlideComponent implements AfterViewInit {
  //String que será usada para gerar os slides no template
  items =  [
    {link1: 'https://www.google.com/', link2:'https://g1.globo.com/', imageUrl: 'assets/images/projeto1.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto2.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto3.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto4.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto5.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto6.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto7.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto8.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto9.png', altText:'profile'},
  ];

  isHovered: boolean[] = new Array(this.items.length).fill(false);

  setHover(index: number, value: boolean): void {
    this.isHovered[index] = value;
  }

  
  ngAfterViewInit(){
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        // Suas configurações aqui
      });
    }, 0);
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 10,
      spaceBetween: 0.5,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000, // Tempo em milissegundos entre os slides
        disableOnInteraction: true // Autoplay não para quando o usuário interage
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      effect: 'slide',
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
      loop: true // Ativa o loop contínuo do slider
    });
    
  }
}
