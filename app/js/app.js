document.addEventListener('DOMContentLoaded', () => {

	const welcomeSlider = new Swiper('.welcome-slider', {
		// Optional parameters
		/* autoHeight: "auto", */
		loop: true,
	  
		// If we need pagination
		pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},

    });
    
    const photoSlider = new Swiper('.photo-gallary', {
		// Optional parameters
		autoHeight: "auto",
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            720: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1050: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},

	});


	/* const menu = document.querySelector('.mobile-menu'),
        burger = document.querySelector('.burger'),
        overlay = document.querySelector('.overlay'),
        closeMenu = document.querySelector('.mobile-menu__close');

    const lockScroll = () => {
        document.body.classList.add('lock');
    }

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    burger.addEventListener('click', () => {
        menu.classList.add('open');
        overlay.classList.add('open');
        lockScroll();
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    }); */

    $('.calculator-nav__link').click(function (e) {
        e.preventDefault();
        $('.calculator-nav__link').removeClass('calculator-nav__link--active');
        $('.calculator-content__item').removeClass('calculator-content__item--active');
        var href = $(this).attr('href');
        $(this).addClass('calculator-nav__link--active');
        $(href).addClass('calculator-content__item--active');
    });

    const multiDefault = () => {
        const elements = document.querySelectorAll('.default-select');
        elements.forEach(el => {
            const choices = new Choices(el, {
                searchEnabled: false,
                silent: true,
            });
        });
        
    }
    
    multiDefault();

})
