// Ми хочемо створити простий лічильник кліків, 
// який буде зберігати своє значення у localStorage.
//  Кожен раз, коли користувач клікає на кнопку, 
// лічильник збільшується на одиницю і оновлюється на сторінці.
// При перезавантаженні сторінки лічильник повинен продовжити показувати останнє збережене значення.



const button = document.querySelector('#counterBtn')
const count = document.querySelector('#counterValue')
const clear = document.querySelector('#clear')
let amount = 0;
const storageKey = 'info'



button.addEventListener('click', onClick)


function onClick() {
    amount += 1
    count.textContent = amount
    localStorage.setItem(storageKey, amount)
}

if(localStorage.getItem(storageKey)) {
    amount = parseInt(localStorage.getItem(storageKey))
    count.textContent = amount
}
clear.addEventListener('click', () => {
    amount = 0
    count.textContent = amount
    localStorage.removeItem(storageKey)
} )