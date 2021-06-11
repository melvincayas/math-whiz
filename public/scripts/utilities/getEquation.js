const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

const randNum = digits => {
	const scale = Math.pow(10, digits - 1);
	const factor = Math.pow(10, digits) - scale;
	return Math.floor(Math.random() * factor) + scale;
};

const difficultySetting = () => {
	const difficulty = gameSettings.difficulty.value;

	if (difficulty === "easy") return [randNum(1), randNum(1)]; // two single-digit numbers
	if (difficulty === "normal") return [randNum(2), randNum(1)]; // one two-digit and one single-digit

	return [randNum(2), randNum(2)]; // two two-digit numbers
};

const filterCheckBox = () => {
	const checkedOperators = [];

	for (let checkbox of checkBoxes) {
		if (checkbox.checked) {
			checkedOperators.push(checkbox.value);
		}
	}

	return checkedOperators;
};

const randOperator = () => {
	const pickedOperators = filterCheckBox();
	const numOperators = pickedOperators.length;
	const randNum = Math.floor(Math.random() * numOperators);

	for (let i = 0; i < numOperators; i++) {
		if (randNum === i) return pickedOperators[i];
	}
};

const fullEquation = () => {
	const operator = randOperator();
	let [firstNum, secondNum] = difficultySetting();

	// Prevents division with remainder
	if (operator === "/" && firstNum % secondNum !== 0) {
		let divisible = false;
		while (!divisible) {
			[firstNum, secondNum] = difficultySetting();
			if (firstNum % secondNum === 0) divisible = true;
		}
	}

	num1.innerText = firstNum;
	num2.innerText = secondNum;
	sign.innerText = operator;
};
