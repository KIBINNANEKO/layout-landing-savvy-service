var splide = new Splide('.splide', {
	classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows your-class-arrows',
		arrow: 'splide__arrow your-class-arrow',
		prev: 'splide__arrow--prev your-class-prev',
		next: 'splide__arrow--next your-class-next',

		// Add classes for pagination.
		pagination: 'splide__pagination', // container
		page: 'splide__pagination__page', // each button
	},
	type: 'loop',
	padding: '20%',
	arrows: false,
	autoWidth: true,
	gap: '10%',
	perPage: 1,
	perMove: 1,
	flickPower: 100,
	flickMaxPages: 1
});

splide.mount();