const click = document.querySelector(".click");
const header = document.querySelector(".header");
const title = document.querySelector("h1");
const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");

const soundToogle = document.querySelector(".audioSwich");
const sound = document.querySelector("audio");

window.addEventListener("load", (e) => {
	console.log(e);
	if (doorLeft.classList.length == 3) {
		playSound();
		doorControl();
	}
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
}

function playSound() {
	if (audioOn.style.display === "block") {
		sound.play();
	}
}
