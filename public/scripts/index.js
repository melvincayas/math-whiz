import { start, quit } from "./utilities/sounds.js";
import { validOperators, validAnswer } from "./utilities/errors.js";
import { toggleHiddenDisplays, countDown } from "./utilities/helpers.js";
import { resetNumbersBoxes, removeAllChildNodes } from "./utilities/reset.js";
import { getRandomEquation } from "./utilities/getEquation.js";
import {
	checkUserAnswer,
	handleUserProgress,
	calculateCorrectAnswer,
} from "./utilities/answerInput.js";

const gameSettings = document.querySelector("#game-settings");
const quitBtn = document.querySelector("#quit-btn");
const answerInput = document.querySelector("#answer-input");
const questionNum = document.querySelector("#question-num");

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
