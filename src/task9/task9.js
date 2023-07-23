const input = document.querySelector("#result");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");
const btnPlus = document.querySelector("#btn-plus");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btnMinus = document.querySelector("#btn-minus");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btnMultiply = document.querySelector("#btn-multiply");
const btn0 = document.querySelector("#btn-0");
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
const btnDivide = document.querySelector("#btn-divide");
const btnClear = document.querySelector("#btn-clear");

btn1.addEventListener("click", onClick);
btn2.addEventListener("click", onClick);
btn3.addEventListener("click", onClick);
btn4.addEventListener("click", onClick);
btn5.addEventListener("click", onClick);
btn6.addEventListener("click", onClick);
btn7.addEventListener("click", onClick);
btn8.addEventListener("click", onClick);
btn9.addEventListener("click", onClick);
btn0.addEventListener("click", onClick);
btnDot.addEventListener("click", onClick);
btnPlus.addEventListener("click", onClick);
btnMinus.addEventListener("click", onClick);
btnMultiply.addEventListener("click", onClick);
btnDivide.addEventListener("click", onClick);

btnEqual.addEventListener("click", onResult);
btnClear.addEventListener("click", onClear);

function onClick(evt) {
  console.log(evt.currentTarget.textContent);
  input.value += evt.currentTarget.textContent;
}

function onResult() {
  const result = new Function(`return ${input.value}`)();
  input.value = result;
}

function onClear() {
  input.value = "";
}

// if (/\d/.test(key)
// (/[+\-*/.]/.test(key))

document.addEventListener("keydown", onPress);

function onPress(evt) {
  if (!isNaN(evt.key)) {
    input.value += evt.key;
  }
  const mathOperators = ["+", "-", "*", "/", "."];
  if (mathOperators.includes(evt.key)) {
    input.value += evt.key;
  }
  if (evt.key === "Enter" || evt.key === "=") {
    onResult();
  }
  if (evt.key === "Escape") {
    onClear();
  }
}

