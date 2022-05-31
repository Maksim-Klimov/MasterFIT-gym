import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.our-programs__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  // navigation: {
  //   nextEl: '.reviews__next',
  //   prevEl: '.reviews__prev',
  // },
  // breakpoints: {
  //   // when window width is >= 320px
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  // }
});
