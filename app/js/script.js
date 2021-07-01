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
	$('.btn__top').on('click', function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});