const title = document.querySelector("#title");

const toggleHiddenDisplays = () => {
	gameSettings.classList.toggle("hidden");
	ansContainer.classList.toggle("hidden");
	gameContent.classList.toggle("hidden");
	statsContainer.classList.toggle("hidden");
};

const makeNumsDivisible = () => {
	let divisible = false;
	while (!divisible) {
		[firstNum, secondNum] = difficultySetting();
		if (firstNum % secondNum === 0) divisible = true;
	}
	return [firstNum, secondNum];
};

const countDown = () => {
	let timeLeft = 60;

	let countdown = setInterval(() => {
		title.innerText = `Time left: ${timeLeft}`;
		if (!gameSettings.classList.contains("hidden")) {
			clearInterval(countdown);
			title.innerText = "Math Whizard";
		} else if (timeLeft === 0) {
			clearInterval(countdown);
			timer.play();
			answerInput.classList.add("hidden");
			title.innerText = "Time's up! Try again?";
		}
		timeLeft--;
	}, 1000);
};
