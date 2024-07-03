const net = new brain.NeuralNetwork();

const data = [
  { "input": { "r": 0, "g": 0, "b": 0 }, "output": [1, 0, 0, 0] }, // White text
  { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0, 1, 0, 0] }, // Black text
  { "input": { "r": 1, "g": 0, "b": 0 }, "output": [0, 0, 1, 0] }, // Red text
  { "input": { "r": 0, "g": 0, "b": 1 }, "output": [0, 0, 0, 1] }, // Blue text
  // ... περισσότερα δεδομένα εκπαίδευσης
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
