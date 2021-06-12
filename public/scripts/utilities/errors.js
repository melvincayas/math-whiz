const validOperators = () => {
	if (filterCheckBox().length === 0) {
		errorText.innerText = "Please select an operator.";
		errorText.classList.remove("hidden");
		return true;
	}

	if (filterCheckBox().length > 0 && errorText.innerText !== "") {
		errorText.innerText = "";
		errorText.classList.add("hidden");
		return false;
	}
};

const validAnswer = () => {
	if (answerInput.number.value === "") {
		errorText.innerText = "Please enter a number.";
		errorText.classList.remove("hidden");
		return true;
	}

	if (answerInput.number.value !== "" && errorText.innerText !== "") {
		errorText.innerText = "";
		errorText.classList.add("hidden");
		return false;
	}
};
