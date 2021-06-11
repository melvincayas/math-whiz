const resetNumsBoxes = () => {
	totalCount = 0;
	rightCount = 0;
	wrongCount = 0;
	totalText.innerText = 0;
	rightText.innerText = 0;
	percentageText.innerText = 0;
	ansContainer.style.height = "0px";
	ansContainer.style.border = "none";
	statsContainer.style.height = "0px";
	statsContainer.style.border = "none";
	answerInput.classList.remove("hidden");
	title.innerText = "Math Whiz";
};

const removeAllChildNodes = () => {
	while (rightList.firstChild) {
		rightList.removeChild(rightList.firstChild);
	}

	while (wrongList.firstChild) {
		wrongList.removeChild(wrongList.firstChild);
	}
};
