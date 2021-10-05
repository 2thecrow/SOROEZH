"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.welcome-slider', {
    // Optional parameters

    /* autoHeight: "auto", */
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var menu = document.querySelector('.mobile-menu'),
      burger = document.querySelector('.burger'),
      overlay = document.querySelector('.overlay'),
      closeMenu = document.querySelector('.mobile-menu__close');

  var lockScroll = function lockScroll() {
    document.body.classList.add('lock');
  };

  var unlockScroll = function unlockScroll() {
    document.body.classList.remove('lock');
  };

  burger.addEventListener('click', function () {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
  });
  closeMenu.addEventListener('click', function () {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  overlay.addEventListener('click', function () {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
});