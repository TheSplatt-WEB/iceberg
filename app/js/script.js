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
$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__btn').toggleClass('open');
	});
	$(document).on('click', function (e) {
		if (!$('.menu__btn').is(e.target) && $('.menu__btn').has(e.target).length === 0) {
			$('.menu__btn').removeClass('open');
		}
	});
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 500) {
			$('.btn__top').fadeIn();
		} else {
			$('.btn__top').fadeOut();
		}
	});
	$('.btn__top').on('click', function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('.diagnostics__slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScrol: 1,
		centerMode: false,
		arrows: false,
		dots: false,
		autoplay: false,
		responsive: [{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2,
				infinite: true,
				dots: true,
				autoplay: true,
			}
		}, {
			breakpoint: 479.98,
			settings: {
				slidesToShow: 1,
				infinite: true,
				dots: true,
				autoplay: true,
			}
		}]
	});
	new SimpleBar($('.tomography__gallery')[0], {
		autoHide: false,
	});
	$(document).on('click', '.questions__link', function (event) {
		event.preventDefault();
		if ($('.questions__list').hasClass('one')) {
			$('.questions__dropdown').not($(this).next()).slideUp();
			$('.questions__link').not($(this)).removeClass('open');
		}
		$(this).next('.questions__dropdown').slideToggle();
		$(this).toggleClass('open');
	});
});