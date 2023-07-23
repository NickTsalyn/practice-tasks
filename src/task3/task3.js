const button = document.querySelector('#myButton');
const list = document.querySelector('#myList');
let counter = 1;

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = new Date().toLocaleTimeString();
  list.appendChild(newItem);
  counter + 1;
});