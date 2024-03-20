import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})

export class SlideComponent implements AfterViewInit {
  items =  [
    {link1: 'https://github.com/raqueldebiase/buondiforedit',link2:'https://buondiforedit360.netlify.app', imageUrl: 'assets/images/proj01.png', altText:'projeto buondi para edit'},
    {link1: 'https://github.com/raqueldebiase/Projeto-final-Edit-Ecommerce',link2:'https://projetofinaledit.netlify.app', imageUrl: 'assets/images/proj02.png', altText:'projeto final edit'},
    {link1: 'https://github.com/raqueldebiase/landscape',link2:'https://landingpageskincare.netlify.app', imageUrl: 'assets/images/proj03.png', altText:'landscape skincare'},
    {link1: 'https://github.com/raqueldebiase/barralHidra-',link2:'https://barralhydra.pt/', imageUrl: 'assets/images/proj04.png', altText:'barral'},
    {link1: 'https://github.com/raqueldebiase/infecao-urinaria', link2:'https://urinal.pt/', imageUrl: 'assets/images/proj05.png', altText:'infecoes urinarias'},
    {link1: 'https://github.com/raqueldebiase/casapiadelisboa', link2:'https://casapia.pt/', imageUrl: 'assets/images/proj06.png', altText:'casa pia de lisboa'},
    {link1: 'https://github.com/raqueldebiase/landscape-II',link2:'https://landingpagethisseason.netlify.app',imageUrl: 'assets/images/proj07.png', altText:'landscape season'},
    {link1: 'https://github.com/raqueldebiase/grid-js', link2:'https://landingpagegridcss.netlify.app', imageUrl: 'assets/images/proj09.png', altText:'profile'},
  ];

  isHovered: boolean[] = new Array(this.items.length).fill(false);

  setHover(index: number, value: boolean): void {
    this.isHovered[index] = value;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,
        spaceBetween: 10,
        allowTouchMove: true,
        simulateTouch: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        effect: 'slide',
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 300
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 300
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 400
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 200
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 500
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 300
          }
        },
        loop: false
      });
    }, 0);
  }
}
