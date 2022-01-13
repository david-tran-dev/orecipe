const tl= gsap.timeline();

const app= {
	init: () => {

		let menuToggleElement= document.querySelector('.header .toggle')
		let bodyElement= document.querySelector('body');
		
		menuToggleElement.addEventListener('click', () => {
			bodyElement.classList.toggle('toggleCliked');
		})

		tl.from('.header', {
			duration: 1.25,
			filter: 'blur(10px)'
		})

		tl.from('.logo, .header__menu, .toggle', {
			duration: 0.75,
			opacity: 0
		});

		tl.from('.header__text__top, .header__text_middle, .header__text__bottom', {
			duration: 0.75,
			opacity: 0
		})

		tl.from('.header__text .sep', {
			duration: 0.75,
			width: '0px'
		})
	}

};

document.addEventListener('DOMContentLoaded', app.init);