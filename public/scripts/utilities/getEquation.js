const randNum = num => {
	if (num === 1) {
		return Math.floor(Math.random() * 9) + 1;
	} else if (num === 2) {
		return Math.floor(Math.random() * 90) + 10;
	}
};

const difficultySetting = () => {
	const difficulty = gameSettings.difficulty.value;

	if (difficulty === "easy") {
		return [randNum(1), randNum(1)];
	} else if (difficulty === "normal") {
		return [randNum(2), randNum(1)];
	} else {
		return [randNum(2), randNum(2)];
	}
};

const filterCheckBox = () => {
	const checkedOperators = [];

	for (let i = 0; i < checkBoxes.length; i++) {
		if (checkBoxes[i].checked) {
			checkedOperators.push(checkBoxes[i].value);
		}
	}

	return checkedOperators;
};

const randOperator = () => {
	const pickedOperators = filterCheckBox();
	const numOperators = pickedOperators.length;
	const randNum = Math.floor(Math.random() * numOperators);

	for (let i = 0; i < numOperators; i++) {
		if (randNum === i) {
			return pickedOperators[i];
		}
	}
};

const fullEquation = () => {
	const operator = randOperator();
	const [firstNum, secondNum] = difficultySetting();

	num1.innerText = firstNum;
	num2.innerText = secondNum;
	sign.innerText = operator;
};
