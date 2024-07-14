window.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('.nav')
	const navMobile = document.querySelector('.nav__mobile-items')
	const burgerBtn = document.querySelector('.nav__mobile-burger')
	const wave = document.querySelector('.waves')

	const navScroll = () => {
		if (window.scrollY > 0) {
			wave.classList.add('waves-hidden')
			nav.classList.add('nav-scroll')
		} else {
			wave.classList.remove('waves-hidden')
			nav.classList.remove('nav-scroll')
		}
	}

	const showMobile = () => {
		if (navMobile.classList.contains('active-mobile')) {
			navMobile.classList.remove('active-mobile')
		} else {
			navMobile.classList.add('active-mobile')
		}
	}

	window.addEventListener('scroll', navScroll)
	burgerBtn.addEventListener('click', showMobile)
})
