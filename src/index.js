import './styles.css'
import {initCloseBtns} from './js_helpers/formButtons'

function createToDo(title, desc, dueDate, priority) {
    return {title, desc, dueDate, priority}
}

let createTaskBtn = document.querySelector('#create-task')
createTaskBtn.addEventListener('click', (e) => {
    document.querySelector('#new-task-form').style.display = 'flex'
});

initCloseBtns() 