const volume = document.getElementById("sound");
console.log(volume);

const start = new Howl({
	src: ["/sounds/start.mp3"],
});

const correct = new Howl({
	src: ["/sounds/correct.mp3"],
});

const incorrect = new Howl({
	src: ["/sounds/incorrect.mp3"],
});

const timer = new Howl({
	src: ["/sounds/timer.mp3"],
});

const menu = new Howl({
	src: ["/sounds/menu.mp3"],
});

const quit = new Howl({
	src: ["/sounds/quit.mp3"],
});

const error = new Howl({
	src: ["/sounds/error.mp3"],
});

volume.addEventListener("click", () => {
	if (volume.classList.contains("fa-volume-up")) {
		volume.classList.remove("fa-volume-up");
		volume.classList.add("fa-volume-mute");
	} else {
		volume.classList.remove("fa-volume-mute");
		volume.classList.add("fa-volume-up");
	}
});
