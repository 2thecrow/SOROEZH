"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var welcomeSlider = new Swiper('.welcome-slider', {
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
  var photoSlider = new Swiper('.photo-gallary', {
    // Optional parameters
    autoHeight: "auto",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1050: {
        slidesPerView: 4,
        spaceBetween: 30
      }
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
  $('.calculator-nav__link').click(function (e) {
    e.preventDefault();
    $('.calculator-nav__link').removeClass('calculator-nav__link--active');
    $('.calculator-content__item').removeClass('calculator-content__item--active');
    var href = $(this).attr('href');
    $(this).addClass('calculator-nav__link--active');
    $(href).addClass('calculator-content__item--active');
  });

  var multiDefault = function multiDefault() {
    var elements = document.querySelectorAll('.default-select');
    elements.forEach(function (el) {
      var choices = new Choices(el, {
        searchEnabled: false,
        silent: true
      });
    });
  };

  multiDefault();
});