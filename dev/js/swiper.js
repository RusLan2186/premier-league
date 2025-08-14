document.addEventListener('DOMContentLoaded', () => {
  function initSwiper(containerSelector, options) {
    const elements = document.querySelectorAll(containerSelector);
    if (!elements.length) return;

    elements.forEach(el => {
      new Swiper(el, {
        ...options,
        pagination: {
          el: el.querySelector('.swiper__pagination'),
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: el.querySelector('.custom__buttom_next'),
          prevEl: el.querySelector('.custom__buttom_prev'),
        },
      });
    });
  }

  // clubs__swiper — может быть несколько
  initSwiper('.clubs__swiper', {
    slidesPerView: 3,
    speed: 800,
    grabCursor: true,
    loop: true,
    spaceBetween: 0,
    autoHeight: false,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      750: { slidesPerView: 2, spaceBetween: 15 },
      1250: { slidesPerView: 3, spaceBetween: 15 },
    },
  });

  // cups__swiper — может быть несколько
  initSwiper('.cups__swiper', {
    slidesPerView: 3,
    speed: 800,
    grabCursor: true,
    loop: true,
    spaceBetween: 0,
    autoHeight: false,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      550: { slidesPerView: 2, spaceBetween: 15 },
      800: { slidesPerView: 3, spaceBetween: 15 },
    },
  });

  // custom__swiper — может быть несколько
  initSwiper('.custom__swiper', {
    slidesPerView: 4,
    speed: 800,
    grabCursor: true,
    loop: true,
    spaceBetween: 15,
    autoHeight: false,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      550: { slidesPerView: 2, spaceBetween: 15 },
      800: { slidesPerView: 3, spaceBetween: 15 },
      1250: { slidesPerView: 4, spaceBetween: 15 },
    },
  });

});
