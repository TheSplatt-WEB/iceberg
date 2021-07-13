function testWebP(callback) {

	let webP = new Image();
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
//Инициализация WOW

new WOW().init();

document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {
		const header = document.querySelector('.header');
		const footer = document.querySelector('.footer');
		const btnTop = document.querySelector('.btn__top');
		let footerHeight = footer.offsetHeight + window.innerHeight;
		let footerVisible = footer.offsetTop;
		let prevScroll = window.pageYOffset;
		let currentScroll;
		window.addEventListener('scroll', () => {
			currentScroll = window.pageYOffset;
			let hidden = footerVisible - footerHeight > prevScroll;
			const headerHidden = () => header.classList.contains('header-hidden');
			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('header-hidden');
			}
			if (currentScroll < prevScroll) {
				if (hidden === false && !headerHidden()) {
					header.classList.add('header-hidden');
				}
				if (hidden === true && headerHidden()) {
					header.classList.remove('header-hidden');
				}
			}
			const btnHidden = () => btnTop.classList.contains('btn-hidden');
			if (currentScroll > prevScroll && !btnHidden()) {
				btnTop.classList.add('btn-hidden');
			}
			if (currentScroll < prevScroll) {
				if (hidden === false && !btnHidden) {
					btnTop.classList.add('btn-hidden');
				}
				if (hidden === true && btnHidden) {
					btnTop.classList.remove('btn-hidden');
				}
			}
			if (currentScroll <= 300 && !btnHidden()) {
				btnTop.classList.add('btn-hidden');
			}
			prevScroll = currentScroll;
		})
	}
	onScrollHeader();
});

//Слайдер Swiper tomography

new Swiper('.tomography__gallery', {
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass) {
			return '0<span class="' + currentClass + '"></span>';
		},
	},
	navigation: {
		nextEl: '.tomography-button-next',
		prevEl: '.tomography-button-prev',
	},
	loop: true,
	observeParents: true,
	observer: true,
	speed: 300,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	on: {
		init: function () {
			const progressBar = document.querySelector('.progress-bar');
			progressBar.classList.remove('animate');
			progressBar.classList.remove('active');
			progressBar.classList.add('animate');
			progressBar.classList.add('active');
		},
		slideChangeTransitionStart: function () {
			const progressBar = document.querySelector('.progress-bar');
			progressBar.classList.remove('animate');
			progressBar.classList.remove('active');
			progressBar.classList.add('active');
		},
		slideChangeTransitionEnd: function () {
			const progressBar = document.querySelector('.progress-bar');
			progressBar.classList.add('animate');
		},
	},
});

//Слайдер Swiper diagnostics

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
		},
	},
});

//Слайдер Swiper visiography

const visiographySwiper = new Swiper('.visiography__gallery', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	watchOverflow: true,
	observeParents: true,
	observer: true,
	slidesPerView: 1,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		480: {
			spaceBetween: 27,
			slidesPerView: 2,
		},
	},
});

//Слайдер Swiper diagnocam

const diagnocamSwiper = new Swiper('.diagnocam__gallery', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	watchOverflow: true,
	observeParents: true,
	observer: true,
	slidesPerView: 1,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		480: {
			spaceBetween: 27,
			slidesPerView: 2,
		},
	},
});

//Показываем Popup галерею слайдера tomography
const tomographyLink = document.querySelectorAll('.tomography__image');
const productsLink = document.querySelectorAll('.products__image');
const body = document.querySelector('body');
for (let tomographyLinkItem of tomographyLink) {
	tomographyLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		this.closest('.tomography__modal').classList.add('open');
		body.classList.add('open');
	});
	document.addEventListener('click', e => {
		const swiperOpen = () => tomographyLinkItem.closest('.tomography__modal').classList.contains('open');
		if (swiperOpen()) {
			const target = e.target
			if (!target.closest('.tomography__image') && !target.closest('.tomography-button-next') && !target.closest('.tomography-button-prev')) {
				body.classList.remove('open');
				tomographyLinkItem.closest('.tomography__modal').classList.remove('open');
			}
		}
	});
};
for (let productsLinkItem of productsLink) {
	productsLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		const swiperOpen = () => this.closest('.products__modal').classList.contains('open');
		if (!swiperOpen()) {
			this.closest('.products__modal').classList.add('open');
			body.classList.add('open');
			visiographySwiper.params.breakpoints[480].slidesPerView = 1;
			visiographySwiper.params.spaceBetween = 0;
			visiographySwiper.params.slidesPerView = 1;
			diagnocamSwiper.params.breakpoints[480].slidesPerView = 1;
			diagnocamSwiper.params.spaceBetween = 0;
			diagnocamSwiper.params.slidesPerView = 1;
		}
	});
	document.addEventListener('click', e => {
		const target = e.target;
		const swiperOpen = () => productsLinkItem.closest('.products__modal').classList.contains('open');
		if (swiperOpen()) {
			if (!target.closest('.products__image') && !target.closest('.swiper-button-next') && !target.closest('.swiper-button-prev')) {
				body.classList.remove('open');
				productsLinkItem.closest('.products__modal').classList.remove('open');
				visiographySwiper.params.breakpoints[480].slidesPerView = 2;
				visiographySwiper.params.spaceBetween = 27;
				visiographySwiper.params.slidesPerView = 2;
				diagnocamSwiper.params.breakpoints[480].slidesPerView = 2;
				diagnocamSwiper.params.spaceBetween = 27;
				diagnocamSwiper.params.slidesPerView = 2;
			}
		}
	});
};

//Кнопка бургера

const menuBtn = document.querySelectorAll('.menu__btn');
for (const menuBtnItem of menuBtn) {
	menuBtnItem.addEventListener('click', function () {
		this.classList.toggle('open');
	});
};

//Скролл к якорям

const diagnosticsLink = document.querySelectorAll('.diagnostics__link');
let speed = .2;
for (let diagnosticsLinkItem of diagnosticsLink) {
	diagnosticsLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		let windowTop = window.pageYOffset;
		const id = this.getAttribute('href');
		const scrollTo = document.querySelector(id);
		let scrollSize = scrollTo.getBoundingClientRect().top;
		let start = null;
		requestAnimationFrame(step);
		function step(time) {
			if (start === null) start = time;
			var progress = time - start,
				r = (scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize));
			window.scrollTo(0, r);
			if (r != windowTop + scrollSize) {
				requestAnimationFrame(step)
			} else {
				location.scrollTo = scrollTo
			}
		}
	}, false);
};

//Кнопки наверх

const btnTop = document.querySelector('.btn__top');
const btnTopFooter = document.querySelector('.footer__top-btn');
btnTop.addEventListener('click', function () {
	let windowTop = window.pageYOffset
	const scrollTo = document.querySelector('.top');
	let scrollSize = scrollTo.getBoundingClientRect().top - 121;
	let start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize));
		window.scrollTo(0, r);
		if (r != windowTop + scrollSize) {
			requestAnimationFrame(step)
		} else {
			location.scrollTo = scrollTo
		}
	}
}, false);
btnTopFooter.addEventListener('click', function () {
	let windowTop = window.pageYOffset;
	const scrollTo = document.querySelector('.top');
	let scrollSize = scrollTo.getBoundingClientRect().top - 121;
	let start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize));
		window.scrollTo(0, r);
		if (r != windowTop + scrollSize) {
			requestAnimationFrame(step)
		} else {
			location.scrollTo = scrollTo
		}
	}
}, false);

//Аккордион

const questionsLink = document.querySelectorAll('.questions__link');
for (let questionsLinkItem of questionsLink) {
	questionsLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		this.classList.toggle('open');
		const dropHidden = () => this.classList.contains('open');
		if (dropHidden()) {
			this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
			this.nextElementSibling.classList.add('open');
		}
		else {
			this.nextElementSibling.style.height = 0 + 'px';
			this.nextElementSibling.classList.remove('open');
		}
	});
};