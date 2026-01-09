/**
 * Отправляет или запрашивает данные.
 * @param {?HTMLElement} form - Форма. Или можно передать data.
 * @param {?string} action - URL сервера. Если не передано - берётся у form.
 * @param {?data} data - Данные, которые надо передать (если нет form).
 * @param {?string} method - Метод. По умолчанию "POST".
 */

async function sendData(form, action, data, method) {
	let url = action ? action : form.action;

	let options = {
		method: method ? method : "POST",
	};

	let formData = null;

	if (date) {
		formData = JSON.stringify(data);
	} else {
		formData = new FormData(form);
	}

	if (options.method.toUpperCase() != "GET") {
		options.body = formData;
	}

	const res = await fetch(url, options);

	if (!res.ok) {
		console.warn(res);
		let err = new Error("HTTP status code: " + res.status);
		throw err;
	}

	return res;
}

let phoneMaskedInputs = document.querySelectorAll(".phoneMask");
phoneMaskedInputs.forEach((item) => {
	IMask(item, {
		mask: "+{7}(000)000-00-00",
	});
});



//.about scripts goes here

let certsSliders = document.querySelectorAll(
	".certsList--slider .certsList__list"
);

certsSliders.forEach((item) => {
	let slider = new Flickity(item, {
		imagesLoaded: true,
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
		draggable: true,
		cellAlign: "center",
		adaptiveHeight: false,
		arrowShape:
			"M57.0965 32.0962C57.737 31.456 58.7508 31.4152 59.4383 31.976L59.5711 32.0962C60.2114 32.7369 60.2516 33.7507 59.6912 34.438L59.5711 34.5708L44.1414 49.9995L59.5711 65.4292C60.2119 66.0701 60.2507 67.0831 59.6912 67.77L59.5711 67.9038C58.8877 68.5872 57.7799 68.5871 57.0965 67.9038L40.4295 51.2378C39.7459 50.5542 39.7467 49.4463 40.4295 48.7632L57.0965 32.0962Z",
	});
});

let accordionBtns = document.querySelectorAll(".faqList__item");

accordionBtns.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("faqList__item--active");
	});
});

let floatMenuBtn = document.querySelector(".floatMenuBtn");

if (floatMenuBtn) {
	let menu = document.querySelector(".header__nav");

	if (menu) {
		floatMenuBtn.addEventListener("click", () => {
			document.body.classList.add("scrollOff");
			menu.classList.remove("header__nav--hiddenOnMobile");
		});
	}

	new IntersectionObserver(([entry]) => {
		floatMenuBtn.classList.toggle(
			"floatMenuBtn--visible",
			!entry.isIntersecting
		);
	}).observe(document.querySelector(".header"));
}

//.frontAbout scripts goes here

let headerBtns = document.querySelectorAll(".header__button");
let mobileMenu = document.querySelector(".header__nav");

headerBtns.forEach((item) => {
	item.addEventListener("click", () => {
		mobileMenu.classList.toggle("header__nav--hiddenOnMobile");
		document.body.classList.toggle("scrollOff");
	});
});

let showOrderModalBtn = document.querySelectorAll(".showOrderModal");
let closeOrderModalBtn = document.querySelectorAll(".closeOrderModal");
let orderModal = document.querySelector(".orderModal");
let orderModalForm = document.querySelector(".orderModal__form");
let orderModalSuccess = document.querySelector(".orderModal__success");

showOrderModalBtn.forEach((item) => {
	item.addEventListener("click", (evt) => {
		evt.preventDefault();
		document.body.classList.add("scrollOff");
		orderModal.classList.add("orderModal--visible");
	});
});

closeOrderModalBtn.forEach((item) => {
	item.addEventListener("click", () => {
		document.body.classList.remove("scrollOff");
		orderModal.classList.remove("orderModal--visible");
	});
});

orderModalForm.addEventListener("submit", () => {
	evt.preventDefault();

	orderModal.classList.add("orderModal--loading");

	sendData(orderModalForm)
		.then((res) => {
			orderModal.classList.remove("orderModal--loading");

			if (res == 1) {
				orderModal.classList.add("orderModal--success");
			} else {
				alert("Ошибка");
			}
		})
		.catch((err) => {
			orderModal.classList.remove("orderModal--loading");
			alert("Ошибка");
		});
});

let reviewsSliders = document.querySelectorAll(
	".reviewsList--slider .reviewsList__list"
);

reviewsSliders.forEach((item) => {
	new Flickity(item, {
		imagesLoaded: true,
		prevNextButtons: false,
		wrapAround: true,
		draggable: true,
		cellAlign: "left",
	});
});

//.search scripts goes here
