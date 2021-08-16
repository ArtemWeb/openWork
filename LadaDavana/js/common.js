document.addEventListener("DOMContentLoaded", function () {

	// burger

	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		document.querySelector(".nav_header").classList.toggle("is-active");
	});


	// var calendar = document.querySelector(".calendar__menu");
	// 	calendar.addEventListener("click", function () {
	// 		calendar.classList.toggle("open");
	// 	});


	var calendar__menu = document.querySelector('.calendar__menu');

	if (calendar__menu) {
		document.onclick = function (e) {
			if (event.target.className != 'calendar__title') {
				calendar__menu.classList.remove('calendar__menu_open');
			} else {
				document.querySelector('.calendar__menu').classList.toggle('calendar__menu_open');
			};
		};
	}
});