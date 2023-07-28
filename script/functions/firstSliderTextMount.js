import { data } from "../../data/slider-info.js";

export function firstSliderTextMount(arraySlidesForTextOnMobile, blockForTextOnDesktop) {

	if (window.innerWidth >= 980) {
		blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
		<div class="block-slider">
			<div class="slider-text">
				<h2 class="main-subheader">${data[0].title}</h2>
				<p class="main-text__center">${data[0].description}</p>
			</div>
		</div>`)
		blockForTextOnDesktop.children[1].style.opacity = '1';
	} else {
		arraySlidesForTextOnMobile[0].insertAdjacentHTML('beforeend', `
			<div class="block-slider">
				<div class="slider-text">
					<h2 class="main-subheader">${data[0].title}</h2>
					<p class="main-text__center">${data[0].description}</p>
				</div>
			</div>`)
		arraySlidesForTextOnMobile[0].children[1].style.opacity = '1';
	}
};
