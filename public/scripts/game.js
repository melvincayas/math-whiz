const gameSettings = document.querySelector("#gameSettings");
const quitBtn = document.querySelector("#quitBtn");
const statsContainer = document.querySelector("#statsContainer");
const gameContent = document.querySelector("#gameContent");
const ansContainer = document.querySelector("#ansContainer");
const rightList = document.querySelector("#rightList");
const wrongList = document.querySelector("#wrongList");
const answer = document.querySelector("#answer");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sign = document.querySelector("#sign");
const rightText = document.querySelector("#rightText");
const totalText = document.querySelector("#totalText");
const percentageText = document.querySelector("#percentageText");

let totalCount = 0;
let rightCount = 0;

gameSettings.addEventListener("submit", e => {
	e.preventDefault();

	if (filterCheckBox().length === 0) {
		return alert("Please select an operator.");
	}

	if (gameSettings.game.value === "minute") {
		countDown();
	}

	toggleClasses();
	fullEquation();
});

answer.addEventListener("submit", e => {
	e.preventDefault();
	const correctAnswer = eval(
		`parseInt(num1.innerText) ${sign.innerText} parseInt(num2.innerText)`
	);
	const userInput = parseInt(answer.number.value);
	const string = `${num1.innerText} ${sign.innerText} ${num2.innerText}`;
	const li = document.createElement("li");
	li.classList.add("listStyle");
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
	answer.number.value = "";
});

quitBtn.addEventListener("click", e => {
	e.preventDefault();

	toggleClasses();
	removeAllChildNodes();
	resetNumsBoxes();
});
