const casesSwiper = new Swiper('.cases__gallery', {
	watchOverflow: true,
	slidesPerView: 1,
	observeParents: true,
	observer: true,
	navigation: {
		nextEl: '.cases__next',
		prevEl: '.cases__prev',
	},
	pagination: {
		el: '.cases__pagination',
		type: 'fraction',
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	on: {
		init: function () {
			const nextBtn = document.querySelector('.cases__next span');
			nextBtn.classList.remove('animate');
			nextBtn.classList.add('animate');
		},
		slideChangeTransitionStart: function () {
			const nextBtn = document.querySelector('.cases__next span');
			nextBtn.classList.remove('animate');
		},
		slideChangeTransitionEnd: function () {
			const nextBtn = document.querySelector('.cases__next span');
			nextBtn.classList.add('animate');
		},
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
			pagination: {
				el: '.cases__pagination',
				type: 'progressbar',
			},
		},
		1024: {
			spaceBetween: 15,
			slidesPerView: 3,
			pagination: {
				el: '.cases__pagination',
				type: 'progressbar',
			},
		},
		1460: {
			spaceBetween: 56,
			slidesPerView: 3,
			pagination: {
				el: '.cases__pagination',
				type: 'progressbar',
			},
		},
	},
});
const clientsSwiper = new Swiper('.clients__gallery', {
	watchOverflow: true,
	slidesPerView: 1,
	observeParents: true,
	observer: true,
	navigation: {
		nextEl: '.clients__next',
		prevEl: '.clients__prev',
	},
	pagination: {
		el: '.clients__pagination',
		type: 'fraction',
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	on: {
		init: function () {
			const nextBtn = document.querySelector('.clients__next span');
			nextBtn.classList.remove('animate');
			nextBtn.classList.add('animate');
		},
		slideChangeTransitionStart: function () {
			const nextBtn = document.querySelector('.clients__next span');
			nextBtn.classList.remove('animate');
		},
		slideChangeTransitionEnd: function () {
			const nextBtn = document.querySelector('.clients__next span');
			nextBtn.classList.add('animate');
		},
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
			pagination: {
				el: '.clients__pagination',
				type: 'progressbar',
			},
		},
		1024: {
			spaceBetween: 15,
			slidesPerView: 3,
			pagination: {
				el: '.clients__pagination',
				type: 'progressbar',
			},
		},
		1460: {
			spaceBetween: 56,
			slidesPerView: 3,
			pagination: {
				el: '.clients__pagination',
				type: 'progressbar',
			},
		},
	},
});
function autoHeightSlide() {
	const slide = document.querySelectorAll('.cases__row');
	for (let slideItem of slide) {
		slideItem.style.height = slideItem.closest('.cases__list').scrollHeight + 'px';
	}
};
autoHeightSlide();
window.addEventListener(`resize`, event => {
	autoHeightSlide();
	casesSwiper.update();
	clientsSwiper.update();

});
const popup = document.querySelectorAll('.clients__popup');
const popupLink = document.querySelectorAll('.clients__item');
const body = document.querySelector('body');
let i = 0;
for (const popupItem of popup) {
	i++;
	popupItem.setAttribute('id', 'item-' + i)
};
let timer = null;
for (const popupLinkItem of popupLink) {
	popupLinkItem.addEventListener('mouseenter', function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			this.classList.add('open');
			const dataId = this.getAttribute('data-id');
			const id = document.getElementById(dataId);
			id.classList.add('open');
			id.querySelector('video').play();
			body.classList.add('open');
		}, 4000);
	});
	popupLinkItem.addEventListener('mouseleave', function () {
		clearTimeout(timer);
	});
	popupLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		this.classList.add('open');
		const dataId = this.getAttribute('data-id');
		const id = document.getElementById(dataId);
		id.classList.add('open');
		id.querySelector('video').play();
		body.classList.add('open');
	});
	document.addEventListener('click', e => {
		const target = e.target;
		const swiperOpen = () => popupLinkItem.classList.contains('open');
		if (swiperOpen()) {
			if (!target.closest('.clients__item') && !target.closest('.popup-clients__video')) {
				body.classList.remove('open');
				popupLinkItem.classList.remove('open');
				const dataId = popupLinkItem.getAttribute('data-id');
				const id = document.getElementById(dataId);
				id.classList.remove('open');
				id.querySelector('video').pause();
				id.querySelector('video').currentTime = 0;
			}
		}
	});
};