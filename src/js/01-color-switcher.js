const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId = null;

startButton.addEventListener('click', startBtnColor);
stopButton.addEventListener('click', stopBtnColor);

function startBtnColor() {
  if (intervalId === null) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
}

function stopBtnColor() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function changeBackgroundColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
