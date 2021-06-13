const validOperators = () => {
	if (filterCheckBox().length === 0) {
		error.play();
		errorText.innerText = "Please select an operator.";
		errorText.classList.remove("hidden");
		return false;
	}

	if (filterCheckBox().length > 0) {
		errorText.innerText = "";
		errorText.classList.add("hidden");
		return true;
	}
};

const validAnswer = () => {
	if (answerInput.number.value === "") {
		error.play();
		errorText.innerText = "Please enter a number.";
		errorText.classList.remove("hidden");
		return false;
	}

	if (answerInput.number.value !== "") {
		errorText.innerText = "";
		errorText.classList.add("hidden");
		return true;
	}
};
