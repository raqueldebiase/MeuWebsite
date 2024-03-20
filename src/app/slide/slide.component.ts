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
    {link1: 'https://www.google.com/', link2:'https://g1.globo.com/', imageUrl: 'assets/images/proj01.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/proj02.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/proj03.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/proj04.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/proj05.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/proj06.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto7.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto8.png', altText:'profile'},
    {link: 'https://www.google.com/', imageUrl: 'assets/images/projeto9.png', altText:'profile'},
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
