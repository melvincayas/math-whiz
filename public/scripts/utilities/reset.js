const rightList = document.querySelector("#right-list");
const wrongList = document.querySelector("#wrong-list");
const answerInput = document.querySelector("#answer-input");
const rightText = document.querySelector("#right-text");
const totalText = document.querySelector("#total-text");
const questionNum = document.querySelector("#question-num");
const percentageText = document.querySelector("#percentage-text");
const errorText = document.querySelector("#error-text");
const ansContainer = document.querySelector("#answer-container");
const statsContainer = document.querySelector("#stats-container");

export const resetNumbersBoxes = () => {
	totalCount = 0;
	rightCount = 0;
	wrongCount = 0;
	questionNum.innerText = 1;
	totalText.innerText = 0;
	rightText.innerText = 0;
	errorText.innerText = "";
	answerInput.number.value = "";
	percentageText.innerText = "";
	percentageText.style.color = "black";
	ansContainer.style.height = "";
	ansContainer.style.border = "none";
	statsContainer.style.height = "";
	statsContainer.style.border = "none";
	answerInput.classList.remove("hidden");
	title.innerText = "Math Whizard";
};

export const removeAllChildNodes = () => {
	while (rightList.firstChild) {
		rightList.removeChild(rightList.firstChild);
	}

	while (wrongList.firstChild) {
		wrongList.removeChild(wrongList.firstChild);
	}
};
