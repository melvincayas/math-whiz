const volume = document.getElementById("sound-btn");

const start = new Howl({
	src: ["sounds/start.mp3"],
});

const correct = new Howl({
	src: ["sounds/correct.mp3"],
});

const incorrect = new Howl({
	src: ["sounds/incorrect.mp3"],
});

const timer = new Howl({
	src: ["sounds/timer.mp3"],
});

const menu = new Howl({
	src: ["sounds/menu.mp3"],
});

const quit = new Howl({
	src: ["sounds/quit.mp3"],
});

const error = new Howl({
	src: ["sounds/error.mp3"],
});

volume.addEventListener("click", () => {
	if (volume.firstChild.classList.contains("fa-volume-up")) {
		Howler.volume(0);
		volume.firstChild.classList.remove("fa-volume-up");
		volume.firstChild.classList.add("fa-volume-mute");
	} else {
		Howler.volume(1);
		volume.firstChild.classList.remove("fa-volume-mute");
		volume.firstChild.classList.add("fa-volume-up");
	}
});
