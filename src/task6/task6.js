// //Створіть простий "замітки" додаток. У додатку повинно бути поле вводу тексту, 
// кнопка "Додати" та список, де будуть відображатися всі додані замітки.

// Завдання:

// Створіть HTML-розмітку з полем вводу, кнопкою та списком.
// Зробіть так, щоб при кліку на кнопку "Додати" текст з поле вводу додавався до списку.
// Зберігайте замітки у локальному сховищі (localStorage), щоб вони зберігалися після перезавантаження сторінки.
// При завантаженні сторінки перевіряйте, чи є збережені замітки у локальному сховищі і відображайте їх у списку.
// Зробіть так, щоб замітки можна було видаляти зі списку за допомогою кліку на них.
// Опрацюйте можливі ситуації, коли поле вводу порожнє або користувач спробує додати вже існуючу замітку.


const form = document.querySelector('#note-form')
const input = document.querySelector('#note-input')
const list = document.querySelector('#note-list')
const storageKey = "info"

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const newNote = input.value.trim()
    if(newNote !== '') {
        const newItem = document.createElement('li')
        newItem.textContent = newNote
        list.appendChild(newItem)
        input.value = ''
        localStorage.setItem(storageKey, JSON.stringify(newItem.value))
        
        list.addEventListener('click', function(evt) {
            if(evt.target.tagName === 'LI') {
                evt.target.remove()
            }
        })
    }
}

const restoreData = () => {
    const saveData = localStorage.getItem(storageKey)
    if(saveData) {
        const data = JSON.stringify(saveData)
        input.value = data.newItem
    }
}

// restoreData()


