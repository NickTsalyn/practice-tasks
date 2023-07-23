const form = document.querySelector('#todo-form')
const input = document.querySelector('#task-input')
const deleteCompleted = document.querySelector('#delete-completed')
const deleteAll = document.querySelector('#delete-all')
const list = document.querySelector('#task-list')

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    if(input.value.trim() === "") {
        return
    }
    const newItem = document.createElement('li')
    list.appendChild(newItem)
    newItem.textContent = input.value
    const completed = document.createElement('button')
    const deleteBtn = document.createElement('button')
    newItem.appendChild(completed)
    newItem.appendChild(deleteBtn)
    completed.textContent = "Completed"
    deleteBtn.textContent = "Delete"

    completed.addEventListener('click', () => {
        newItem.classList.add('completed')
    })
    deleteBtn.addEventListener('click', () => 
        newItem.remove())
}

deleteCompleted.addEventListener('click', onDeleteCompleted) 
deleteAll.addEventListener('click', onDeleteAll)

function onDeleteCompleted() {
    const arr = Array.from(list.getElementsByClassName('completed'))
    arr.forEach(item => item.remove())
}

function onDeleteAll() {
    list.innerHTML = ""
}