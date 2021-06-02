const door = document.querySelector("#door");
const click = document.querySelector("body");
click.addEventListener("click", (e) => {
	doorControl();
});

function doorControl() {
	console.log(door);
	door.classList.toggle("gateDown");
}
