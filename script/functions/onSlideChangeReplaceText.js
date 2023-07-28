import { data } from "../../data/slider-info.js";

export function onSlideChangeReplaceText(arraySlidesForTextOnMobile, blockForTextOnDesktop) {
	let lastIndex = 0;

	function processSlideChange(newIndex) {

		if (window.innerWidth >= 980 && newIndex != lastIndex) {
			blockForTextOnDesktop.children[1].style.opacity = '0';
			blockForTextOnDesktop.children[1].remove();

			switch (newIndex) {
				case 0:
					blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
						<div class="block-slider">
						<div class="slider-text">
							<h2 class="main-subheader">${data[0].title}</h2>
							<p class="main-text">${data[0].description}</p>
						</div>
						</div>
					`);
					setTimeout(() => {
						blockForTextOnDesktop.children[1].style.opacity = '1';
					}, 1);
					break;
				case 1:
					blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
						<div class="block-slider">
						<div class="slider-text">
							<h2 class="main-subheader">${data[1].title}</h2>
							<p class="main-text">${data[1].description}</p>
						</div>
						</div>
					`);
					setTimeout(() => {
						blockForTextOnDesktop.children[1].style.opacity = '1';
					}, 1);
					break;
				case 2:
					blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[2].title}</h2>
								<p class="main-text">${data[2].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						blockForTextOnDesktop.children[1].style.opacity = '1';
					}, 1);
					break;
				case 3:
					blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[3].title}</h2>
								<p class="main-text">${data[3].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						blockForTextOnDesktop.children[1].style.opacity = '1';
					}, 1);
					break;
				case 4:
					blockForTextOnDesktop.insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[4].title}</h2>
								<p class="main-text">${data[4].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						blockForTextOnDesktop.children[1].style.opacity = '1';
					}, 1);
					break;
			}
		}
		if (window.innerWidth < 980 && newIndex != lastIndex){
			arraySlidesForTextOnMobile.forEach(item => {
				if (item.children.length > 1) {
					item.children[1].style.opacity = '0';
					setTimeout(() => {
						item.children[1].remove();
					}, 300);
				}
			})
			switch (newIndex) {
				case 0:
					arraySlidesForTextOnMobile[0].insertAdjacentHTML('beforeend', `
						<div class="block-slider">
						<div class="slider-text">
							<h2 class="main-subheader">${data[0].title}</h2>
							<p class="main-text">${data[0].description}</p>
						</div>
						</div>
					`);
					setTimeout(() => {
						arraySlidesForTextOnMobile[newIndex].children[1].style.opacity = '1';
					}, 1);
					break;
				case 1:
					arraySlidesForTextOnMobile[1].insertAdjacentHTML('beforeend', `
						<div class="block-slider">
						<div class="slider-text">
							<h2 class="main-subheader">${data[1].title}</h2>
							<p class="main-text">${data[1].description}</p>
						</div>
						</div>
					`);
					setTimeout(() => {
						arraySlidesForTextOnMobile[newIndex].children[1].style.opacity = '1';
					}, 1);
					break;
				case 2:
					arraySlidesForTextOnMobile[2].insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[2].title}</h2>
								<p class="main-text">${data[2].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						arraySlidesForTextOnMobile[newIndex].children[1].style.opacity = '1';
					}, 1);
					break;
				case 3:
					arraySlidesForTextOnMobile[3].insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[3].title}</h2>
								<p class="main-text">${data[3].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						arraySlidesForTextOnMobile[newIndex].children[1].style.opacity = '1';
					}, 1);
					break;
				case 4:
					arraySlidesForTextOnMobile[4].insertAdjacentHTML('beforeend', `
						<div class="block-slider">
							<div class="slider-text">
								<h2 class="main-subheader">${data[4].title}</h2>
								<p class="main-text">${data[4].description}</p>
							</div>
						</div>
					`);
					setTimeout(() => {
						arraySlidesForTextOnMobile[newIndex].children[1].style.opacity = '1';
					}, 1);
					break;
			}
		}

			lastIndex = newIndex;
		}


	return processSlideChange;
}