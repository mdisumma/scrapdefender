const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const click = document.querySelector("body");

const about = document.querySelector("#about");
const play = document.querySelector("#unity-container");
const support = document.querySelector("#support");

click.addEventListener("click", (e) => {
	console.log(click);

	doorControl(e);
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
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
