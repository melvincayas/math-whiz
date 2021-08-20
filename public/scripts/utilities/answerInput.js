import { correct, incorrect } from "./sounds.js";

const rightList = document.querySelector("#right-list");
const wrongList = document.querySelector("#wrong-list");
const answerInput = document.querySelector("#answer-input");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sign = document.querySelector("#sign");
const rightText = document.querySelector("#right-text");
const totalText = document.querySelector("#total-text");
const percentageText = document.querySelector("#percentage-text");

export const calculateCorrectAnswer = () => {
	let trueOperator = sign.innerText;
	if (sign.innerText === "×") trueOperator = "*";
	if (sign.innerText === "÷") trueOperator = "/";

	const correctAnswer = eval(
		`parseInt(num1.innerText) ${trueOperator} parseInt(num2.innerText)`
	);

	return correctAnswer;
};

const correctAnswerActions = evaluatedEquation => {
	correct.play();
	rightList.append(evaluatedEquation);
	rightCount++;
	rightText.innerText = rightCount;
	totalText.innerText = totalCount;
};

const wrongAnswerActions = evaluatedEquation => {
	incorrect.play();
	wrongList.append(evaluatedEquation);
	totalText.innerText = totalCount;
};

export const checkUserAnswer = correctAnswer => {
	const userInput = parseInt(answerInput.number.value);
	const string = `Q${totalCount}. ${num1.innerText} ${sign.innerText} ${num2.innerText} = ${userInput}`;
	const li = document.createElement("li");
	li.classList.add("list-style");
	li.append(string);

	if (userInput === correctAnswer) {
		correctAnswerActions(li);
	} else {
		wrongAnswerActions(li);
	}
};

export const handleUserProgress = () => {
	const percentage = Math.round((rightCount / totalCount) * 100);
	percentageText.innerText = `${percentage}%`;

	if (percentage < 20) return (percentageText.style.color = "firebrick");
	if (percentage < 40) return (percentageText.style.color = "crimson");
	if (percentage < 60) return (percentageText.style.color = "red");
	if (percentage < 80) return (percentageText.style.color = "orangered");
	if (percentage <= 100) return (percentageText.style.color = "green");
};
