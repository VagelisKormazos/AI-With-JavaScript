# AI With JavaScript

This project demonstrates how to use a neural network in JavaScript to predict the color of text that should be displayed on a given background color. The neural network is trained using the `brain.js` library.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project utilizes a neural network to predict the appropriate color (white, black, red, or blue) for text based on the background color. The neural network is trained on various RGB color inputs to classify the appropriate text color.

## Features

- Neural network training with `brain.js`.
- Predicting text color based on background color.
- Interactive buttons to provide user feedback for further training.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/AI-With-JavaScript.git
    ```

2. Navigate to the project directory:
    ```sh
    cd AI-With-JavaScript
    ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Open `index.html` in a web browser.
2. The displayed color will change randomly.
3. Click on the button that best represents the text color you think is appropriate (White, Black, Red, or Blue).
4. The neural network will adjust based on your input.
5. To print the current training data to the console, click the "Print" button.

## Code Explanation

### JavaScript (scriptExample.js)

```javascript
const net = new brain.NeuralNetwork();

const data = [
  { "input": { "r": 0, "g": 0, "b": 0 }, "output": [1, 0, 0, 0] }, // White text
  { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0, 1, 0, 0] }, // Black text
  { "input": { "r": 1, "g": 0, "b": 0 }, "output": [0, 0, 1, 0] }, // Red text
  { "input": { "r": 0, "g": 0, "b": 1 }, "output": [0, 0, 0, 1] }, // Blue text
  // ... additional training data
];

net.train(data);

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const redButton = document.getElementById('red-button');
const blueButton = document.getElementById('blue-button');
const printButton = document.getElementById('print-button');
let color;
setRandomColor();

whiteButton.addEventListener('click', () => {
  chooseColor([1, 0, 0, 0]); // white
});

blackButton.addEventListener('click', () => {
  chooseColor([0, 1, 0, 0]); // black
});

redButton.addEventListener('click', () => {
  chooseColor([0, 0, 1, 0]); // red
});

blueButton.addEventListener('click', () => {
  chooseColor([0, 0, 0, 1]); // blue
});

printButton.addEventListener('click', print);

function chooseColor(value) {
  data.push({
    input: color,
    output: value
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  };
  const guess = net.run(color);
  const maxIndex = guess.indexOf(Math.max(...guess));
  let textColor;
  switch (maxIndex) {
    case 0:
      textColor = '#FFF';
      break;
    case 1:
      textColor = '#000';
      break;
    case 2:
      textColor = '#F00';
      break;
    case 3:
      textColor = '#00F';
      break;
  }
  guessEl.style.color = textColor;
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
}
