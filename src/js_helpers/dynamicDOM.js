import {createAllTables} from './tableCreation'
import {addTaskToProject, getProjectList, removeTask, getTaskDetails} from '../index'

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

function changeTaskListeners() {
    let removeTaskBtns = document.querySelectorAll('.change-btn')
    removeTaskBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let task = btn.id.split('-btn-')[0]
            let project = btn.id.split('-btn-')[1]
            let taskDetails = getTaskDetails(project, task)
            console.log(taskDetails)
            document.querySelector('#change-task-name').value = taskDetails.title
            document.querySelector('#change-task-description').value = taskDetails.desc
            //document.querySelector('#change-due-date').value = taskDetails.dueDate
            document.querySelector('#change-priority').value = taskDetails.priority  
            document.querySelector('#submit-change-task').dataset.project = project
            document.querySelector('#submit-change-task').dataset.task = task
            document.querySelector('#change-task-form').style.display = 'flex'
        })
    })
}





function clearAddTaskForm() {
    document.querySelector('#task-name').value = '' 
    document.querySelector('#task-description').value = ''
    document.querySelector('#priority').value = ''
    document.querySelector('#due-date').value = ''
}

function clearChangeTaskForm() {
    document.querySelector('#change-task-name').value = '' 
    document.querySelector('#change-task-description').value = ''
    document.querySelector('#change-priority').value = ''
    document.querySelector('#change-due-date').value = ''
}


function generateDOM(projectList) {
    createAllTables(projectList)
    addTaskListeners()
    rmvTaskListeners()
    changeTaskListeners()
    clearAddTaskForm()
    clearChangeTaskForm()
}


export {generateDOM}