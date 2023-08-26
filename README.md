# Counter Application README

## Table of Contents

1. [Introduction](#Introduction)
2. [Technologies Used](#Technologies-Used)
3. [Features](#Features)
4. [Installation](#Installation)
5. [Usage](#Usage)
6. [Contributing](#Contributing)
7. [License](#License)

## Introduction

Welcome to the Counter App! This is a simple web application that lets you increment a counter and save the values to keep track of your counting activity. You can increment the count by clicking a button and also save the current count. After saving, the counter resets to zero.

## Technologies Used

- HTML5
- CSS
- Vanilla JavaScript

## Features

- **Increment Counter**: Increase the counter by 1 for every click on the "INCREMENT" button.
  
- **Save Count**: Saves the current count value, displays it under "Previous entries", and resets the counter.
  
## Installation

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/your-repo/counter-app.git
   ```

2. Open the project in your preferred code editor.

3. Make sure you have a live server extension to see real-time changes, or just open the HTML file with your web browser.

## Usage

- **Incrementing the Counter**: Click the "INCREMENT" button to increase the count by 1.

- **Saving the Count**: Click the "SAVE" button to save the current count to the "Previous entries" section and reset the counter to zero.

Here's a simplified code snippet:

```javascript
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
	count += 1;
	countEl.innerText = count;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
}
```

This code performs the increment and save operations. It uses basic DOM manipulation to get and set the text content for respective elements.

## Contributing

If you'd like to contribute, feel free to open a pull request or issue. Before committing any code, ensure:

- All code is properly formatted and passes Prettier and Lint tests.
- Only modify the parts of the files that pertain to your changes.

## License

MIT License. See the LICENSE.md file for more details.

---