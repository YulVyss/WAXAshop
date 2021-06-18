import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);
import Swiper from 'swiper';
const swiper = new Swiper('.swiper-container', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	// pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
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
			pagination: false,
		},
		768: {
			navigation: false,
			pagination: false,
		},
		992: {
			slidesPerView: 1,
			spaceBetween: 30,
		}
	},
});

