// Створіть сторінку, на якій буде розміщений квадратний об'єкт 
// (наприклад, <div> з фіксованими розмірами та кольором фону). 
//     Користувач повинен мати можливість переміщати цей об'єкт
//      у чотирьох напрямках: вгору, вниз, вліво та вправо, 
//      використовуючи клавіші "W", "S", "A" та "D" відповідно.
// при натисканні на кнопку, об'єкт повертається в початкове положення 



const object = document.querySelector('#object')
const button = document.querySelector('.button')
const step = 10

const initialPosition = {
    top: object.offsetTop,
    left: object.offsetLeft
}

window.addEventListener('keydown', onMove)
button.addEventListener('click', onReset)

function onMove(evt) {
    const key = evt.key.toLowerCase()
    const positionY = object.offsetTop
    const positionX = object.offsetLeft
    if(key === "w") {
        object.style.top = `${positionY - step}px`
    }
    else if(key === "s") {
        object.style.top = `${positionY + step}px`
    }
    else if(key === "a") {
        object.style.left = `${positionX - step}px`
    }
    else if(key === "d") {
        object.style.left = `${positionX + step}px`
    }
}

function onReset(){
    object.style.top = `${initialPosition.top}px`
    object.style.left = `${initialPosition.left}px`
}