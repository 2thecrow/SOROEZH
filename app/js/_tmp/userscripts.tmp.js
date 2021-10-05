"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.welcome-slider', {
    // Optional parameters
    autoHeight: "auto",
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});