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

	toggleClasses();
	fullEquation();
});

answerInput.addEventListener("submit", e => {
	e.preventDefault();

	totalCount++;

	if (!validAnswer()) return;

	let trueOperator = sign.innerText;
	if (sign.innerText === "×") trueOperator = "*";
	if (sign.innerText === "÷") trueOperator = "/";

	const correctAnswer = eval(
		`parseInt(num1.innerText) ${trueOperator} parseInt(num2.innerText)`
	);
	const userInput = parseInt(answerInput.number.value);
	const string = `Q${totalCount}. ${num1.innerText} ${sign.innerText} ${num2.innerText} = ${userInput}`;
	const li = document.createElement("li");
	li.classList.add("list-style");
	li.append(string);

	if (userInput === correctAnswer) {
		correct.play();
		rightList.append(li);
		rightCount++;
		rightText.innerText = rightCount;
		totalText.innerText = totalCount;
	} else {
		incorrect.play();
		wrongList.append(li);
		totalText.innerText = totalCount;
	}

	questionNum.innerText = totalCount + 1;
	const percentage = Math.round((rightCount / totalCount) * 100);
	percentageText.innerText = `${percentage}%`;
	percentageColors(percentage);
	answerInput.number.value = "";
	fullEquation();
});

quitBtn.addEventListener("click", e => {
	e.preventDefault();
	quit.play();
	toggleClasses();
	removeAllChildNodes();
	resetNumsBoxes();
});
