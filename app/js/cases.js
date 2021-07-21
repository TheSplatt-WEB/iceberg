const title = document.querySelectorAll('.tomography-cases__title');
if (title) {
	for (let titleItem of title) {
		const titlePreParents = titleItem.closest('.tomography__inner');
		const titleParents = titleItem.closest('.tomography__text');
		const titleClass = () => titleItem.classList.contains('moved');
		function innerTitle() {
			if (window.innerWidth <= 1024 && !titleClass()) {
				titleItem.classList.add('moved');
				titlePreParents.prepend(titleItem);
			}
			if (window.innerWidth > 1025 && titleClass()) {
				titleItem.classList.remove('moved');
				titleParents.prepend(titleItem);
			}
		}
		innerTitle();
		window.addEventListener('resize', function () {
			innerTitle();
		});
	};
};
const casesContent = document.querySelector('.cases__content');
if (casesContent) {
	const topCasesBody = document.querySelector('.top-cases__body');
	const brushCases = document.querySelector('.top-cases__decor-left');
	const topCasesBodyHeight = topCasesBody.clientHeight;
	function marginTopResize() {
		if (window.innerWidth >= 768) {
			casesContent.style.marginTop = - (document.documentElement.clientHeight - (topCasesBodyHeight + 160)) + 'px';
			brushCases.style.bottom = (document.documentElement.clientHeight - (topCasesBodyHeight + 240)) + 'px';
		}
		if (window.innerWidth < 769) {
			casesContent.style.marginTop = - (window.innerHeight - (topCasesBodyHeight + 130)) + 'px';
		}
	};
	window.addEventListener('resize', function () {
		marginTopResize();
	});
	marginTopResize();
}
const tomographySituation = document.querySelector('.tomography__situation');
if (tomographySituation) {
	new Swiper('.tomography__situation', {
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
};
const tomographyStages = document.querySelector('.tomography__stages');
if (tomographyStages) {
	new Swiper('.tomography__stages', {
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
				const progressBar = document.querySelector('.progress-stages');
				progressBar.classList.remove('animate');
				progressBar.classList.remove('active');
				progressBar.classList.add('animate');
				progressBar.classList.add('active');
			},
			slideChangeTransitionStart: function () {
				const progressBar = document.querySelector('.progress-stages');
				progressBar.classList.remove('animate');
				progressBar.classList.remove('active');
				progressBar.classList.add('active');
			},
			slideChangeTransitionEnd: function () {
				const progressBar = document.querySelector('.progress-stages');
				progressBar.classList.add('animate');
			},
		},
	});
};
const tomographyWeeks = document.querySelector('.tomography__weeks');
if (tomographyWeeks) {
	new Swiper('.tomography__weeks', {
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
				const progressBar = document.querySelector('.progress-week');
				progressBar.classList.remove('animate');
				progressBar.classList.remove('active');
				progressBar.classList.add('animate');
				progressBar.classList.add('active');
			},
			slideChangeTransitionStart: function () {
				const progressBar = document.querySelector('.progress-week');
				progressBar.classList.remove('animate');
				progressBar.classList.remove('active');
				progressBar.classList.add('active');
			},
			slideChangeTransitionEnd: function () {
				const progressBar = document.querySelector('.progress-week');
				progressBar.classList.add('animate');
			},
		},
	});
};
const resultSwiper = new Swiper('.result__gallery.open', {
	watchOverflow: true,
	observeParents: true,
	observer: true,
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const anchorsLink = document.querySelectorAll('.anchors__link');
let speed = .2;
for (let anchorsLinkItem of anchorsLink) {
	anchorsLinkItem.addEventListener('click', function (el) {
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
const casesAnchors = document.querySelector('.cases__anchors');
if (casesAnchors) {
	const casesAnchorsScroll = casesAnchors.getBoundingClientRect().top;
	function ancorFixed() {
		window.addEventListener('scroll', () => {
			const anchorScroll = () => casesAnchors.classList.contains('active');
			if (casesAnchorsScroll <= window.pageYOffset + 130 && !anchorScroll()) {
				casesAnchors.classList.add('active');
			}
			if (casesAnchorsScroll >= window.pageYOffset + 130 && anchorScroll()) {
				casesAnchors.classList.remove('active');
			}
		});
	}
	window.addEventListener('resize', () => {
		ancorFixed();
	});
	ancorFixed();
}