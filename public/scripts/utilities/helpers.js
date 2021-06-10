const title = document.querySelector("#title");

const toggleClasses = () => {
	gameSettings.classList.toggle("hidden");
	ansContainer.classList.toggle("hidden");
	gameContent.classList.toggle("hidden");
	statsContainer.classList.toggle("hidden");
};

const countDown = () => {
	let timeLeft = 60;

	let countdown = setInterval(() => {
		title.innerText = `Time left: ${timeLeft}`;
		if (!gameSettings.classList.contains("hidden")) {
			clearInterval(countdown);
			title.innerText = "Math Whiz";
		} else if (timeLeft === 0) {
			clearInterval(countdown);
			answer.classList.add("hidden");
			title.innerText = "Time's up! Try again?";
		}
		timeLeft--;
	}, 1000);
};
