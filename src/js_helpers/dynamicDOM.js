import {createAllTables} from './tableCreation'
import {addTaskToProject, getProjectList, removeTask} from '../index'

function addTaskListeners() {
    let createTaskBtns = document.querySelectorAll('.add-btn')
    createTaskBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector('#new-task-form').style.display = 'flex'
            let project = btn.id.replace('-add-btn', '')
            document.querySelector('#window-project').textContent = project
        })
    })
}

function rmvTaskListeners() {
    let removeTaskBtns = document.querySelectorAll('.remove-btn')
    removeTaskBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let task = btn.id.split('-btn-')[0]
            let project = btn.id.split('-btn-')[1]
            removeTask(project, task)
            generateDOM(getProjectList())
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
    addTaskListeners()
    rmvTaskListeners()
    clearTaskForm()
}


export {generateDOM}