//Menu middle
let iconMenuM = document.querySelector(".header-middle__icon");
let menuBodyM = document.querySelector(".header-middle__list");
let unlock = true;

if (iconMenuM != null) {
	iconMenuM.addEventListener("click", function (e) {
		if (unlock) {
			iconMenuM.classList.toggle("active");
			menuBodyM.classList.toggle("active");
		}
	});
};

//Menu bottom
let iconMenuB = document.querySelector(".header-bottom__button");
let menuBodyB = document.querySelector(".header-bottom__list");

if (iconMenuB != null) {
	iconMenuB.addEventListener("click", function (e) {
		if (unlock) {
			iconMenuB.classList.toggle("active");
			menuBodyB.classList.toggle("active");
		}
	});
};
