
const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    // Проверяем инпуь на пустоту и пробелы
    if(input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }


    const div = document.createElement('div')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')
    const text = document.createElement('h3')


    div.setAttribute('class', 'block_text')
    divButtons.setAttribute('class', 'div_button')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')


    deleteButton.innerText = 'DELETE'
    editButton.innerText = 'EDIT'


    text.innerText = input.value
    

    input.value = ''


    divButtons.append(deleteButton, editButton)


    div.append(text, divButtons)


    todoList.prepend(div)


    text.onclick = () => text.classList.toggle('toggle')


    deleteButton.onclick = () => div.remove()

    editButton.onclick = ()=> {
        const editText = prompt(`EDITED: ${text.innerText}`).trim()
        editText === '' ? alert('ERROR') : text.innerText = editText
    }
}
createButton.onclick = () => createTodo()
window.onkeydown = (event) => event.code === 'Enter' ? createTodo() : console.log('sorry');

