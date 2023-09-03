function accordionClick() {
	const cards = document.querySelectorAll(".plans-click");

	cards.forEach((card) => {
		card.addEventListener("click", (i) => {
			card.nextElementSibling.classList.toggle("opened");
			card.querySelector("img").classList.toggle("card-image");
		})
	})
}

function navbar() {
	const menu = document.querySelector(".nav-items");
	const click = document.querySelector(".button-nav");

	click.addEventListener("click", () => {
		click.classList.toggle("clicked");
		menu.classList.toggle("clicked");
	})
}

navbar();
accordionClick();
