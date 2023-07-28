import { firstSliderTextMount, onSlideChangeReplaceText } from "./functions/index.js";

var splide = new Splide('.splide', {
	classes: {
		arrow: 'splide__arrow splide-arrow-my',
		next: 'splide__arrow--next splide__arrow--next-my',
		prev: 'splide__arrow--prev splide__arrow--prev-my'
	},

	type: 'loop',
	padding: '7%',
	arrows: false,
	autoWidth: true,
	gap: '7%',
	perPage: 1,
	perMove: 1,
	flickPower: 100,
	flickMaxPages: 1,
	focus: 'center',

	mediaQuery: 'min',
	breakpoints: {
		980: {
			arrows: true,
		},
	}
});

let arraySlidesForTextOnMobile = document.querySelectorAll('.img_box');
let blockForTextOnDesktop = document.querySelector('#slider-info-block')

splide.on('mounted', () => firstSliderTextMount(arraySlidesForTextOnMobile, blockForTextOnDesktop));

let slideChangeHandler = onSlideChangeReplaceText(arraySlidesForTextOnMobile, blockForTextOnDesktop);

splide.on('moved', function(newIndex) {
	slideChangeHandler(newIndex)
});

splide.mount();