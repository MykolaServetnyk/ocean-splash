'use strict';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

(() => {
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1440: {
        slidesPerView: 3,
      },
    },
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    on: {
      init: function () {
        this.slides.forEach(slide => {
          slide.style.transform = 'scale(0.8)';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1)';
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          slide.style.transform = 'scale(0.8)';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1)';
      },
    },
  });
})();
