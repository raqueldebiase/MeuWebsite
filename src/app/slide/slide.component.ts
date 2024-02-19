import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
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
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/profile-2.jpg', altText:'profile'},
  ];

  
  ngAfterViewInit(){
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        // Suas configurações aqui
      });
    }, 0);
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 10,
      spaceBetween: 1,
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
      loop: true // Ativa o loop contínuo do slider
    });
    const swiperBreak = new Swiper('.swiper', {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 10,
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
      }
    })
  }
}
