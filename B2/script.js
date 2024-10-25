let seconds = 0;
let centiseconds = 0;
let timerInterval = null;

const secondsElement = document.getElementById("seconds");
const centisecondsElement = document.getElementById("centiseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    centiseconds++;
    if (centiseconds > 99) {
      centiseconds = 0;
      seconds++;
    }

    if (seconds > 999) {
      clearInterval(timerInterval);
    }

    secondsElement.textContent = seconds.toString().padStart(3, "0");
    centisecondsElement.textContent = centiseconds.toString().padStart(2, "0");
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  centiseconds = 0;
  secondsElement.textContent = "000";
  centisecondsElement.textContent = "00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
