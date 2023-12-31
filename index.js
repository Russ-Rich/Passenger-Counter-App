let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
	count += 1;
	countEl.innerText = count;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
	console.log(count);
}

function reset() {
	count = 0;
	countEl.textContent = count;
	saveEl.textContent = "Previous entries: ";
}

let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
	const incrementBtn = document.getElementById("increment-btn");
	const counterDisplay = document.getElementById("counter-display");

	incrementBtn.addEventListener("click", () => {
		counter++;
		counterDisplay.innerText = counter;
	});
});
