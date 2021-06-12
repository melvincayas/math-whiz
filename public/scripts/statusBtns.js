const historyBtn = document.querySelector("#history-btn");
const statsBtn = document.querySelector("#stats-btn");
const statsContainer = document.querySelector("#stats-container");
const ansContainer = document.querySelector("#answer-container");

historyBtn.addEventListener("click", () => {
	if (ansContainer.style.height === "") {
		ansContainer.style.height = "350px";
		ansContainer.style.border = "1px solid #333";
	} else {
		ansContainer.style.height = "";
		ansContainer.style.border = "none";
	}
});

statsBtn.addEventListener("click", () => {
	if (statsContainer.style.height === "") {
		statsContainer.style.height = "140px";
		statsContainer.style.border = "1px solid #333";
	} else {
		statsContainer.style.height = "";
		statsContainer.style.border = "none";
	}
});
