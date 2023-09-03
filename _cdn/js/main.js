const cards = document.querySelectorAll(".plans-click");

cards.forEach((card) => {
	card.addEventListener("click", (i) => {
		console.log(card.nextElementSibling)
		card.nextElementSibling.classList.toggle("opened");
		card.querySelector("i").classList.toggle("fa-angle-down");
	})
})