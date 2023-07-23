const form = document.getElementById("timerForm");
const input = document.querySelector("#minutes");
const time = document.querySelector("#timerDisplay");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const minutes = parseInt(input.value);
  if (minutes > 0) {
    countdown(minutes);
  }
}

function countdown(minutes) {
  let seconds = minutes * 60;

  const timer = setInterval(function () {
    seconds--;

    if (seconds >= 0) {
      const minutesRemain = Math.floor(seconds / 60);
      const secondsRemain = seconds % 60;

      time.textContent = `${minutesRemain}:${secondsRemain
        .toString()
        .padStart(2, "0")}`;
    } else {
      clearInterval(timer);
      time.textContent = "Game Over !!!";
    }
  }, 1000);
}
