function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {
		const header = document.querySelector('.header')
		const footer = document.querySelector('.footer')
		const btnTop = document.querySelector('.btn__top')
		let footerHeight = footer.offsetHeight + window.innerHeight
		let footerVisible = footer.offsetTop
		let prevScroll = window.pageYOffset
		let currentScroll
		window.addEventListener('scroll', () => {
			currentScroll = window.pageYOffset
			let hidden = footerVisible - footerHeight > prevScroll
			const headerHidden = () => header.classList.contains('header-hidden')
			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('header-hidden')
			}
			if (currentScroll < prevScroll) {
				if (hidden === false && !headerHidden()) {
					header.classList.add('header-hidden')
				}
				if (hidden === true && headerHidden()) {
					header.classList.remove('header-hidden')
				}
			}
			const btnHidden = () => btnTop.classList.contains('btn-hidden')
			if (currentScroll > prevScroll && !btnHidden()) {
				btnTop.classList.add('btn-hidden')
			}
			if (currentScroll < prevScroll) {
				if (hidden === false && !btnHidden) {
					btnTop.classList.add('btn-hidden')
				}
				if (hidden === true && btnHidden) {
					btnTop.classList.remove('btn-hidden')
				}
			}
			if (currentScroll <= 300 && !btnHidden()) {
				btnTop.classList.add('btn-hidden')
			}
			prevScroll = currentScroll
		})
	}
	onScrollHeader();
});
const autoplay = 5000
new Swiper('.tomography__gallery', {
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass) {
			return '0<span class="' + currentClass + '"></span>';
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	observeParents: true,
	observer: true,
	speed: 300,
	autoplay: {
		delay: autoplay,
		disableOnInteraction: false,
	},
	on: {
		init: function () {
			$(".progress-bar").removeClass("animate");
			$(".progress-bar").removeClass("active");
			$(".progress-bar").eq(0).addClass("animate");
			$(".progress-bar").eq(0).addClass("active");
		},
		slideChangeTransitionStart: function () {
			$(".progress-bar").removeClass("animate");
			$(".progress-bar").removeClass("active");
			$(".progress-bar").eq(0).addClass("active");
		},
		slideChangeTransitionEnd: function () {
			$(".progress-bar").eq(0).addClass("animate");
		}
	}
});
// .progress-bar{
// 	position: absolute;
// 	height: 3px;
// 	width: calc(100% - 52px);
// 	bottom: 15px;
// 	left: 26px;
// 	right: 26px;
// 	border-radius: 3px;
// 	background-color: rgba($text, .7);
// 	z-index: 2;
// 	&__progress{
// 		position: absolute;
// 		height: 3px;
// 		left: 0;
// 		right: 0;
// 		top: 0;
// 		width: 0;
// 	   opacity: 0;
// 		background-color: $el;
// 		z-index: 3;
// 		transition: all .1s;
// 		&.active {
// 			.slide_progress-bar {
// 			  opacity: 1;
// 			}
// 		 }
// 		 &.animate {
// 			.slide_progress-bar {
// 			  &:after {
// 				 transition: width linear;
// 				 transition-delay: unset;
// 				 width: 100%;
// 				 transition-duration: 5s;
// 			  }
// 			}
// 		 }
// 	}
// }

new Swiper('.diagnostics__slider', {
	watchOverflow: true,
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
			pagination: false,
		}
	},
});
const visiographySwiper = new Swiper('.visiography__gallery', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	watchOverflow: true,
	spaceBetween: 27,
	observeParents: true,
	observer: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
		}
	},
});
const diagnocamSwiper = new Swiper('.diagnocam__gallery', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	watchOverflow: true,
	spaceBetween: 27,
	observeParents: true,
	observer: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
		}
	},
});
const productsLink = document.querySelectorAll('.products__image')
for (let productsLinkItem of productsLink) {
	productsLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		const swiperOpen = () => this.closest('.products__modal').classList.contains('open')
		if (!swiperOpen()) {
			this.closest('.products__modal').classList.add('open');
			visiographySwiper.params.breakpoints[480].slidesPerView = 1;
			visiographySwiper.params.spaceBetween = 0;
			visiographySwiper.params.slidesPerView = 1;
			diagnocamSwiper.params.breakpoints[480].slidesPerView = 1;
			diagnocamSwiper.params.spaceBetween = 0;
			diagnocamSwiper.params.slidesPerView = 1;
		}
	})
}
const visiographyModal = document.querySelector('.visiography__modal')
const diagnocamModal = document.querySelector('.diagnocam__modal')
const tomographyModal = document.querySelector('.tomography__modal')
const body = document.querySelector('body')
window.addEventListener('click', e => {
	const target = e.target
	if (!target.closest('.products__gallery') && !target.closest('.tomography__gallery') && !target.closest('.diagnocam__gallery')) {
		visiographyModal.classList.remove('open')
		diagnocamModal.classList.remove('open')
		tomographyModal.classList.remove('open')
		body.classList.remove('open')
		visiographySwiper.params.breakpoints[480].slidesPerView = 1;
		visiographySwiper.params.spaceBetween = 27;
		visiographySwiper.params.slidesPerView = 2;
		diagnocamSwiper.params.breakpoints[480].slidesPerView = 1;
		diagnocamSwiper.params.spaceBetween = 27;
		diagnocamSwiper.params.slidesPerView = 2;
	}
})
new WOW().init();
$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__btn').toggleClass('open');
	});
	$(document).on('click', function (e) {
		if (!$('.menu__btn').is(e.target) && $('.menu__btn').has(e.target).length === 0) {
			$('.menu__btn').removeClass('open');
		}
	});
	$('.footer__top-btn, .btn__top').on('click', function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('.diagnostics__link').on('click', function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 800);
	});
	$(document).on('click', '.questions__link', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
		$(this).next('.questions__dropdown').slideToggle();
	});
	$('.tomography__image').on('click', function (event) {
		event.preventDefault();
		$('.tomography__modal, body').addClass('open');
	});
	$('.products__image').on('click', function (event) {
		event.preventDefault();
		$('body').addClass('open');
	});
});