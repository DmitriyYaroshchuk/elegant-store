function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('.nav__btn-mobile');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	const nav = document.querySelector('.mobile-nav');
	// const menuIcon = document.querySelector('.nav-icon');

	navBtnOpen.onclick = function () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open')
		// menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open')
		document.body.classList.toggle('no-scroll');
	}

	navBtnClose.onclick = closeMobileNav;
	mobileNavFade.onclick = closeMobileNav;

	nav.addEventListener('click', event => {
		event.stopPropagation();
	});
}

export default mobileNav;