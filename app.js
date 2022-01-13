const tl= gsap.timeline();

const app= {
	init: () => {

		const openMenuElement= document.querySelector('.header .toggle')
		const bodyElement= document.querySelector('body');
		const closeElement = document.querySelector('.header .close');

		openMenuElement.addEventListener('click', () => {
			bodyElement.classList.toggle('toggleCliked');
		});

		closeElement.addEventListener('click', () => {
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