import Swiper from 'swiper';
  // import Swiper styles
  // import 'swiper/swiper-bundle.css';

	const swiper = new Swiper('.swiper-container', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		speed: 800,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},	
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {						
					320: {
						navigation: false,
					},
					768: {
						navigation: false,
					},
					992: {
						slidesPerView: 1,
						spaceBetween: 30,
					}
				},
	});

