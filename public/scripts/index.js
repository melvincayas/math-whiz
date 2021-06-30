const gameSettings = document.querySelector("#game-settings");
const quitBtn = document.querySelector("#quit-btn");
const gameContent = document.querySelector("#game-content");
const rightList = document.querySelector("#right-list");
const wrongList = document.querySelector("#wrong-list");
const answerInput = document.querySelector("#answer-input");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sign = document.querySelector("#sign");
const rightText = document.querySelector("#right-text");
const totalText = document.querySelector("#total-text");
const questionNum = document.querySelector("#question-num");
const percentageText = document.querySelector("#percentage-text");
const errorText = document.querySelector("#error-text");

let totalCount = 0;
let rightCount = 0;

gameSettings.addEventListener("submit", e => {
	e.preventDefault();

	if (!validOperators()) return;

	start.play();

	if (gameSettings.game.value === "minute") countDown();

	toggleHiddenDisplays();
	getRandomEquation();
});

answerInput.addEventListener("submit", e => {
	e.preventDefault();

	totalCount++;

	if (!validAnswer()) return;

	const correctAnswer = calculateCorrectAnswer();
	checkUserAnswer(correctAnswer);
	handleUserProgress();

	questionNum.innerText = totalCount + 1;
	answerInput.number.value = "";

	getRandomEquation();
});

quitBtn.addEventListener("click", () => {
	quit.play();
	toggleHiddenDisplays();
	removeAllChildNodes();
	resetNumbersBoxes();
});
