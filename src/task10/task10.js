// "Гра на вгадування слів або чисел":

// Користувач отримує випадкове слово або число, яке потрібно вгадати.
// Є обмежена кількість спроб (наприклад, 5 спроб) для вгадування правильного слова чи числа.
// Користувач може вводити свої варіанти відповіді через текстове поле або вікно введення.
// Після кожної спроби повідомляється користувачу, чи була відповідь правильною, чи ні.
// Якщо користувач вгадав слово чи число, гра завершується і повідомляється про перемогу. В іншому випадку, користувач може продовжити вгадування до вичерпання кількості спроб.

// Користувач має вгадати загадане випадкове число від 1 до 100. Він має 5 спроб на вгадування. При кожній спробі гра повідомляє користувачу, чи було введене число більше чи менше загаданого, і скільки спроб залишилось. Коли користувач вгадує число або вичерпує ліміт спроб, гра закінчується.

const input = document.querySelector("#guessInput");
const button = document.querySelector("#btn");
const text = document.querySelector("#message");
const clearButton = document.querySelector("#clear-btn");
const timer = document.querySelector("#timer");

const requiredInput = getRandomNumber();
let tryAmount = 4;
let startGame = false;
let time;
let timeInterval;

input.addEventListener("input", onInput);
button.addEventListener("click", onClick);
clearButton.addEventListener("click", clear);

function onInput(evt) {
  inputValue = evt.target.value.trim();
  console.log(inputValue);
  if (!startGame) {
    startGame = true;
    startCountdown();
  }
}

function onClick() {
  const guessWord = inputValue.toLowerCase();
  const guessNumber = parseInt(inputValue);
  if ((guessNumber || guessWord) === requiredInput.toString()) {
    text.textContent = "Вітаю ви вгадали";
    button.disabled = true;
    clearButton.disabled = false;
    clearInterval(timeInterval);
    timer.textContent = "";
  } else {
    text.textContent = `Мимо, залишилось ${tryAmount--} спроби`;
    clearButton.disabled = true;
    if (tryAmount < 0) {
      text.textContent = "Ви програли";
      button.disabled = true;
      clearButton.disabled = false;
      clearInterval(timeInterval);
      timer.textContent = "";
    }
  }
}

function clear() {
  tryAmount = 4;
  text.textContent = "";
  inputValue = "";
  input.value = "";
  button.disabled = false;
  clearButton.disabled = true;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function countdown() {
  let minutes = 2;
  let seconds = minutes * 60;
  timeInterval = setInterval(function () {
    seconds--;
    if (seconds >= 0) {
      const minutesRemain = Math.floor(seconds / 60);
      const secondsRemain = seconds % 60;

      timer.textContent = `${minutesRemain}:${secondsRemain
        .toString()
        .padStart(2, "0")}`;
    } else {
      clearInterval(timeInterval);
      timer.textContent = "";
    }
  }, 1000);
}

function startCountdown() {
  countdown();
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (clearButton.disabled) {
      return;
    } else {
      clear();
    }
  } else if (evt.key === "Enter") {
    onClick();
  }
});
