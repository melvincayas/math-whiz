import { menu } from "./utilities/sounds.js";

const historyBtn = document.querySelector("#history-btn");
const statsBtn = document.querySelector("#stats-btn");
const statsContainer = document.querySelector("#stats-container");
const ansContainer = document.querySelector("#answer-container");

historyBtn.addEventListener("click", () => {
	if (ansContainer.style.height === "") {
		menu.play();
		ansContainer.style.height = "350px";
		ansContainer.style.border = "1px solid #333";
	} else {
		ansContainer.style.height = "";
		ansContainer.style.border = "none";
	}
});

statsBtn.addEventListener("click", () => {
	if (statsContainer.style.height === "") {
		menu.play();
		statsContainer.style.height = "100%";
		statsContainer.style.border = "1px solid #333";
	} else {
		statsContainer.style.height = "";
		statsContainer.style.border = "none";
	}
});
