import './styles.css'
import {initAllBtns} from './js_helpers/initDOM'
import {generateDOM} from './js_helpers/dynamicDOM'


let projectList = {}
if (localStorage.getItem('projectList')) {
    projectList = JSON.parse(localStorage.getItem('projectList'))
}
else {
    createPlaceHolderInfo()   
}
generateDOM(projectList)
console.log(projectList)
initAllBtns()


function createPlaceHolderInfo() {
    storeProject('Default Project', 'Default Description')
    storeProject('Uninmportant Items', 'Uninmportant Description')
    addTask('Read Email', 'Read all emails from today', '2021-12-11', 1, "Default Project")
    addTask('Wash Car', 'Wash & wax car', '2021-12-23', 2, "Default Project")
    addTask('Celebrate Christmas', 'Enjoy!!!', '2021-12-25', 1, "Uninmportant Items")    
}


function getProjectList() {
    return projectList
}

function getTaskDetails(project, title) {
    let index = 0
    for (let i = 0; i < projectList[project].toDoList.length; i++) {
        if (projectList[project].toDoList[i].title == title) {
            index = i
            break
        }
    }
    return projectList[project].toDoList[index]
}

function createTask(title, desc, dueDate, priority) {
    return {title, desc, dueDate, priority}
}

function addTask(title, desc, dueDate, priority, project) {
    projectList[project].toDoList.push(createTask(title, desc, dueDate, priority))
}

function createProject(name, description) {
    let toDoList = []
    return {name, description, toDoList, addTask}
}

function removeTask(project, title) {
    let index = 0
    for (let i = 0; i < projectList[project].toDoList.length; i++) {
        if (projectList[project].toDoList[i].title == title) {
            index = i
            break
        }
    }
    projectList[project].toDoList.splice(index, 1)
}

function changeTask(project, title) {
    let index = 0
    for (let i = 0; i < projectList[project].toDoList.length; i++) {
        if (projectList[project].toDoList[i].title == title) {
            index = i
            break
        }
    }
    console.log(projectList[project].toDoList[index].title)
    console.log('to')
    console.log(document.querySelector('#change-task-name').value)
    projectList[project].toDoList[index].title = document.querySelector('#change-task-name').value
    projectList[project].toDoList[index].desc = document.querySelector('#change-task-description').value
    projectList[project].toDoList[index].dueDate = document.querySelector('#change-due-date').value
    projectList[project].toDoList[index].priority = document.querySelector('#change-priority').value
}

function storeProject(name, description) {
    console.log(name) 
    console.log(description)   
    projectList[name] = createProject(name, description)
    generateDOM(projectList)
}


let createProjectBtn = document.querySelector('#create-project')
createProjectBtn.addEventListener('click', (e) => {
    document.querySelector('#new-project-form').style.display = 'flex'
});

console.log(projectList)
export {storeProject, addTask, getProjectList, removeTask, changeTask, getTaskDetails}