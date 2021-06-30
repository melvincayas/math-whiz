const calculateCorrectAnswer = () => {
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

const checkUserAnswer = correctAnswer => {
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

const handleUserProgress = () => {
	const percentage = Math.round((rightCount / totalCount) * 100);
	percentageText.innerText = `${percentage}%`;

	if (percentage < 20) return (percentageText.style.color = "firebrick");
	if (percentage < 40) return (percentageText.style.color = "crimson");
	if (percentage < 60) return (percentageText.style.color = "red");
	if (percentage < 80) return (percentageText.style.color = "orangered");
	if (percentage <= 100) return (percentageText.style.color = "green");
};
