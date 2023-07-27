var splide = new Splide('.splide', {
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
});

let slides = document.querySelectorAll('.img_box');

splide.on('mounted', function () {
	slides[0].insertAdjacentHTML('beforeend', `
		<div class="block-slider">
			<div class="slider-text">
				<h2 class="main-subheader">Гнучка робота з фішками</h2>
				<p class="main-text">Все відбувається в декілька кліків, для гнучкості можна використовуватияк назву закладу, геопозицію клієнтачи його унікальний QR-код</p>
			</div>
		</div>
	`);

	setTimeout(() => {
		slides[0].children[1].style.opacity = '1';
	}, 1);
});

let lastIndex = 0;

splide.on('moved', function (newIndex) {

	console.log(newIndex, lastIndex);

	if(newIndex == lastIndex){
		console.log(newIndex, lastIndex);
	}
	else{

	slides.forEach(item => {
		if (item.children.length > 1) {
			item.children[1].style.opacity = '0';
			setTimeout(() => {
				item.children[1].remove();
			}, 300); // Задержка в 300мс для завершения плавного исчезновения
		}
	});

	switch (newIndex) {
		case 0:
			slides[0].insertAdjacentHTML('beforeend', `
				<div class="block-slider">
					<div class="slider-text">
						<h2 class="main-subheader">Гнучка робота з фішками</h2>
						<p class="main-text">Все відбувається в декілька кліків, для гнучкості можна використовуватияк назву закладу, геопозицію клієнтачи його унікальний QR-код</p>
					</div>
				</div>
			`);
			setTimeout(() => {
				slides[newIndex].children[1].style.opacity = '1';
			}, 1);
			break;
			case 1:
			slides[1].insertAdjacentHTML('beforeend', `
				<div class="block-slider">
					<div class="slider-text">
						<h2 class="main-subheader">Проста система для персоналу</h2>
						<p class="main-text">Мінімум налаштувань та повний контроль за фішками клієнтів. Додавайте та використовуйте фішки клієнтів за декілька секунд</p>
					</div>
				</div>
			`);
			setTimeout(() => {
				slides[newIndex].children[1].style.opacity = '1';
			}, 1);
			break;
		case 2:
			slides[2].insertAdjacentHTML('beforeend', `
				<div class="block-slider">
					<div class="slider-text">
						<h2 class="main-subheader">Станьте ближче до клієнтів</h2>
						<p class="main-text">Надсилайте оголошення про обмежені пропозиції, новини, та збирайте фідбек ефективніше. Сотні відгуків за лічені хвилини у Гугл формі</p>
					</div>
				</div>
			`);
			setTimeout(() => {
				slides[newIndex].children[1].style.opacity = '1';
			}, 1);
			break;
		case 3:
			slides[3].insertAdjacentHTML('beforeend', `
				<div class="block-slider">
					<div class="slider-text">
						<h2 class="main-subheader">Відстежуйте успіх додатку</h2>
						<p class="main-text">Для адмінів доступні коротка статистика просто в боті та розширена в адмін панелі з можливістю її скачати </p>
					</div>
				</div>
			`);
			setTimeout(() => {
				slides[newIndex].children[1].style.opacity = '1';
			}, 1);
			break;
		case 4:
			slides[4].insertAdjacentHTML('beforeend', `
				<div class="block-slider">
					<div class="slider-text">
						<h2 class="main-subheader">Унікальні функції для вас</h2>
						<p class="main-text">Використовуйте декілька мов, додавайте меню закладу, персональні передбачення, власні стікери, тощо</p>
					</div>
				</div>
			`);
			setTimeout(() => {
				slides[newIndex].children[1].style.opacity = '1';
			}, 1);
			break;
	}}

	lastIndex = newIndex;
});

splide.mount();