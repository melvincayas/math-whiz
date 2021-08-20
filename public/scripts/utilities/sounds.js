const volume = document.getElementById("sound-btn");

export const start = new Howl({
	src: ["sounds/start.mp3"],
});

export const correct = new Howl({
	src: ["sounds/correct.mp3"],
});

export const incorrect = new Howl({
	src: ["sounds/incorrect.mp3"],
});

export const timer = new Howl({
	src: ["sounds/timer.mp3"],
});

export const menu = new Howl({
	src: ["sounds/menu.mp3"],
});

export const quit = new Howl({
	src: ["sounds/quit.mp3"],
});

export const error = new Howl({
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
