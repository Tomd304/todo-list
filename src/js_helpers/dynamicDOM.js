import {createAllTables} from './tableCreation'
import {addTaskToProject} from '../index'

function addTableBtnListeners() {
    let createTaskBtns = document.querySelectorAll('.add-btn')
    createTaskBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector('#new-task-form').style.display = 'flex'
            let project = btn.id.replace('-add-btn', '')
            document.querySelector('#window-project').textContent = project
        })
    })
}

function clearTaskForm() {
    document.querySelector('#task-name').value = '' 
    document.querySelector('#task-description').value = ''
    document.querySelector('#priority').value = ''
    document.querySelector('#due-date').value = ''
}


function generateDOM(projectList) {
    createAllTables(projectList)
    addTableBtnListeners()
    clearTaskForm()
}


export {generateDOM}