const title = document.querySelectorAll('.tomography-cases__title');
for (let titleItem of title) {
	const titlePreParents = titleItem.closest('.tomography__inner');
	const titleParents = titleItem.closest('.tomography__text');
	const titleClass = () => titleItem.classList.contains('moved');
	function innerTitle() {
		if (window.innerWidth < 1024 && !titleClass()) {
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
const casesContent = document.querySelector('.cases__content');
if (casesContent) {
	const topCasesBody = document.querySelector('.top-cases__body');
	const topCasesBodyHeight = topCasesBody.clientHeight;
	function marginTopResize() {
		if (window.innerWidth > 768) {
			casesContent.style.marginTop = - (window.innerHeight - (topCasesBodyHeight + 290)) + 'px';
			console.log('1')
		}
		if (window.innerWidth < 769) {
			casesContent.style.marginTop = - (window.innerHeight - (topCasesBodyHeight + 130)) + 'px';
			console.log('2')
		}
	};
	window.addEventListener('resize', function () {
		marginTopResize();
	});
	marginTopResize();
}
