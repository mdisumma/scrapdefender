const click = document.querySelector("header");
const header = document.querySelector(".header");
const title = document.querySelector("h1");
const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");

const soundToogle = document.querySelector(".button");
const sound = document.querySelector("audio");

click.addEventListener("click", (e) => {
	playSound();
	doorControl();
});

const audioOff = document.querySelector(".audioOff");
const audioOn = document.querySelector(".audioOn");

audioOn.style.display = "block";
audioOff.style.display = "none";
soundToogle.addEventListener("click", (e) => {
	if (audioOn.style.display === "block") {
		audioOn.style.display = "none";
		audioOff.style.display = "block";
	} else {
		audioOn.style.display = "block";
		audioOff.style.display = "none";
	}
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
	title.classList.toggle("titleDown");
	header.classList.toggle("headerDisplay");
}

function playSound() {
	if (audioOn.style.display === "block") {
		sound.play();
	}
}
