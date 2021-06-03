const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const click = document.querySelector("body");

const sound = document.querySelector("audio");

click.addEventListener("click", (e) => {
	console.log(click);
	console.log(sound);
	playSound();
	doorControl(e);
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
}
function playSound() {
	sound.play();
}

// const navTrigger = document.querySelector("#navTrigger");
// navTrigger.addEventListener("click", (e) => {
// 	console.log(nav.style);
// 	if (nav.style.top === "5vh") {
// 		nav.style.top = "0";
// 	} else {
// 		if (doorLeft.classList.length === 2) {
// 			console.log(doorLeft.classList.length);
// 			doorControl(e);
// 			nav.style.top = "5vh";
// 		} else {
// 			nav.style.top = "5vh";
// 		}
// 	}
// });
