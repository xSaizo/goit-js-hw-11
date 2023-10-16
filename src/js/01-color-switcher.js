let intervalId = null;
let isColorChanging = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function disableStartButton() {
  isColorChanging = true;
  startButton.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function enableStartButton() {
  isColorChanging = false;
  startButton.disabled = false;
  clearInterval(intervalId);
  intervalId = null;
}

const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', function () {
  if (!isColorChanging) {
    disableStartButton();
  }
});

const stopButton = document.querySelector('[data-stop]');
stopButton.addEventListener('click', function () {
  if (isColorChanging) {
    enableStartButton();
  }
});
