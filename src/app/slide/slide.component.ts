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
    {link1: 'https://github.com/raqueldebiase/grid-js', link2:'https://landingpagegridcss.netlify.app', imageUrl: 'assets/images/proj09.png', altText:'profile'},
    {link1: 'https://github.com/raqueldebiase/cultura-unl', link2:'https://novacultura.unl.pt/', imageUrl: 'assets/images/proj11.png', altText:'nova cultura'},
    {link1: 'https://github.com/raqueldebiase/superbockgroup', link2:'https://superbockgroup.com/', imageUrl: 'assets/images/proj10.png', altText:'super bock group'},
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
          280: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 230,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 320
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          570: {
            slidesPerView: 2,
            spaceBetween: 300
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 300
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 300
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 400
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 350
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 150
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 450
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
