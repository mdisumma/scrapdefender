const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const click = document.querySelector("body");

click.addEventListener("click", (e) => {
	doorControl();
});

function doorControl() {
	console.log(doorLeft);
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
}
