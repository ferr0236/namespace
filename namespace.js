var FERR0236 = {
	init: () => {
		let div = document.createElement("div");
		div.setAttribute("class", "box");
		div.textContent = "ferr0236";

		div.addEventListener("mouseover", () => {
			div.classList.toggle("highlight");
		});

		div.addEventListener("mouseout", () => {
			div.classList.toggle("highlight");
			div.removeAttribute("style");
		});

		div.addEventListener("click", () => {
			div.style.borderColor = "green";
			div.style.backgroundColor = "blue";
		});

		let boxes = document.querySelector("#boxes");
		if (boxes) {
			boxes.append(div);
		}
	}
};
