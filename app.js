const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
  },
});

