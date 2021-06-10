const historyBtn = document.querySelector("#historyBtn");
const statsBtn = document.querySelector("#statsBtn");

historyBtn.addEventListener("click", () => {
	if (ansContainer.style.height === "0px" || ansContainer.style.height === "") {
		ansContainer.style.height = "350px";
		ansContainer.style.border = "1px solid #333333";
		ansContainer.style.boxShadow = "2px 2px black";
	} else {
		ansContainer.style.height = "0px";
		ansContainer.style.border = "none";
	}
});

statsBtn.addEventListener("click", () => {
	if (
		statsContainer.style.height === "0px" ||
		statsContainer.style.height === ""
	) {
		statsContainer.style.height = "140px";
		statsContainer.style.border = "1px solid black";
		statsContainer.style.boxShadow = "2px 2px black";
	} else {
		statsContainer.style.height = "0px";
		statsContainer.style.border = "none";
	}
});
