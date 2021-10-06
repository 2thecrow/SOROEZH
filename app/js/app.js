document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.welcome-slider', {
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

	const menu = document.querySelector('.mobile-menu'),
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
    });

    /* $('.buy-apartment__tab').click(function (e) {
        e.preventDefault();
        $('.buy-apartment__tab').removeClass('buy-apartment__tab--active');
        $('.buy-apartment__tab-content').removeClass('buy-apartment__tab-content--active');
        var href = $(this).attr('href');
        $(this).addClass('buy-apartment__tab--active');
        $(href).addClass('buy-apartment__tab-content--active');
    }); */

})
