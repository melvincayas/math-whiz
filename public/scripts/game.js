const gameSettings = document.querySelector("#game-settings");
const quitBtn = document.querySelector("#quit-btn");
const statsContainer = document.querySelector("#stats-container");
const gameContent = document.querySelector("#game-content");
const ansContainer = document.querySelector("#answer-container");
const rightList = document.querySelector("#right-list");
const wrongList = document.querySelector("#wrong-list");
const answerInput = document.querySelector("#answer-input");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sign = document.querySelector("#sign");
const rightText = document.querySelector("#right-text");
const totalText = document.querySelector("#total-text");
const percentageText = document.querySelector("#percentage-text");
const errorText = document.querySelector("#error-text");

let totalCount = 0;
let rightCount = 0;

gameSettings.addEventListener("submit", e => {
	e.preventDefault();

	if (validOperators()) return;

	if (gameSettings.game.value === "minute") countDown();

	toggleClasses();
	fullEquation();
});

answerInput.addEventListener("submit", e => {
	e.preventDefault();

	if (validAnswer()) return;

	let trueOperator = sign.innerText;
	if (sign.innerText === "×") trueOperator = "*";
	if (sign.innerText === "÷") trueOperator = "/";

	const correctAnswer = eval(
		`parseInt(num1.innerText) ${trueOperator} parseInt(num2.innerText)`
	);
	const userInput = parseInt(answerInput.number.value);
	const string = `${num1.innerText} ${sign.innerText} ${num2.innerText}`;
	const li = document.createElement("li");
	li.classList.add("list-style");
	li.append(string);

	if (userInput === correctAnswer) {
		rightList.append(li);
		rightCount++;
		totalCount++;
		rightText.innerText = rightCount;
		totalText.innerText = totalCount;
	} else {
		wrongList.append(li);
		totalCount++;
		totalText.innerText = totalCount;
	}

	percentageText.innerText = Math.round((rightCount / totalCount) * 100);
	fullEquation();
	answerInput.number.value = "";
});

quitBtn.addEventListener("click", e => {
	e.preventDefault();

	toggleClasses();
	removeAllChildNodes();
	resetNumsBoxes();
});
