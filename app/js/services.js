new Swiper('.cases__gallery', {
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
			const nextBtn = document.querySelector('.cases__next span')
			nextBtn.classList.remove('animate');
			nextBtn.classList.add('animate');
		},
		slideChangeTransitionStart: function () {
			const nextBtn = document.querySelector('.cases__next span')
			nextBtn.classList.remove('animate');
		},
		slideChangeTransitionEnd: function () {
			const nextBtn = document.querySelector('.cases__next span')
			nextBtn.classList.add('animate');
		}
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			pagination: false,
			spaceBetween: 15,
			scrollbar: {
				el: '.cases__scrollbar',
				draggable: true,
			},
			loop: false,
			autoplay: false,
		},
		1024: {
			spaceBetween: 15,
			pagination: false,
			scrollbar: {
				el: '.cases__scrollbar',
				draggable: true,
			},
			slidesPerView: 3,
			loop: false,
			autoplay: false,
		},
		1460: {
			spaceBetween: 56,
			pagination: false,
			scrollbar: {
				el: '.cases__scrollbar',
				draggable: true,
			},
			slidesPerView: 3,
			loop: false,
			autoplay: false,
		}
	},
});
new Swiper('.clients__gallery', {
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
			const nextBtn = document.querySelector('.clients__next span')
			nextBtn.classList.remove('animate');
			nextBtn.classList.add('animate');
		},
		slideChangeTransitionStart: function () {
			const nextBtn = document.querySelector('.clients__next span')
			nextBtn.classList.remove('animate');
		},
		slideChangeTransitionEnd: function () {
			const nextBtn = document.querySelector('.clients__next span')
			nextBtn.classList.add('animate');
		}
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			pagination: false,
			spaceBetween: 15,
			scrollbar: {
				el: '.clients__scrollbar',
				draggable: true,
			},
			loop: false,
			autoplay: false,
		},
		1024: {
			spaceBetween: 15,
			pagination: false,
			scrollbar: {
				el: '.clients__scrollbar',
				draggable: true,
			},
			slidesPerView: 3,
			loop: false,
			autoplay: false,
		},
		1460: {
			spaceBetween: 60,
			pagination: false,
			scrollbar: {
				el: '.clients__scrollbar',
				draggable: true,
			},
			slidesPerView: 3,
			loop: false,
			autoplay: false,
		}
	},
});
function autoHeightSlide() {
	const slide = document.querySelectorAll('.services-slider__row')
	for (let slideItem of slide) {
		slideItem.style.height = slideItem.closest('.services-slider__list').scrollHeight + 'px';
	}
}
autoHeightSlide();
const popup = document.querySelectorAll('.clients__popup')
const popupLink = document.querySelectorAll('.clients__item')
const body = document.querySelector('body')
let i = 0;
for (const popupItem of popup) {
	i++;
	popupItem.setAttribute('id', 'item-' + i)
}
let ii = 0;
let timer = null;
for (const popupLinkItem of popupLink) {
	ii++;
	popupLinkItem.setAttribute('data-id', 'item-' + ii)
	popupLinkItem.addEventListener('mouseenter', function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			this.classList.add('open')
			const dataId = this.getAttribute('data-id')
			const id = document.getElementById(dataId)
			id.classList.add('open')
			body.classList.add('open')
		}, 5000);
	});
	popupLinkItem.addEventListener('mouseleave', function () {
		clearTimeout(timer);
	});
	popupLinkItem.addEventListener('click', function (el) {
		el.preventDefault();
		this.classList.add('open')
		const dataId = this.getAttribute('data-id')
		const id = document.getElementById(dataId)
		id.classList.add('open')
		body.classList.add('open')
	});
}
const clientsBtn = document.querySelectorAll('.popup-clients__btn')
for (const clientsBtnItem of clientsBtn) {
	clientsBtnItem.addEventListener('click', function () {
		this.closest('.clients__popup').classList.remove('open')
		body.classList.remove('open')
	})
}