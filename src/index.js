import './styles.css'
import {initAllBtns} from './js_helpers/initDOM'
import {generateDOM} from './js_helpers/dynamicDOM'


let projectList = {}
/*
if (localStorage.getItem('projectList')) {
    projectList = JSON.parse(localStorage.getItem('projectList'))
}
else {
    createPlaceHolderInfo()   
}
*/
createPlaceHolderInfo()
generateDOM(projectList)
initAllBtns()


function createPlaceHolderInfo() {
    storeProject('Default Project', 'Default Description')
    storeProject('Uninmportant Items', 'Uninmportant Description')
    projectList["Default Project"].addTask('Read Email', 'Read all emails from today', '2021-12-11', 1)
    projectList["Default Project"].addTask('Wash Car', 'Wash & wax car', '2021-12-23', 2)
    projectList["Uninmportant Items"].addTask('Celebrate Christmas', 'Enjoy!!!', '2021-12-25', 1)    
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

function createProject(name, description) {
    let toDoList = []
    function addTask(title, desc, dueDate, priority) {
        toDoList.push(createTask(title, desc, dueDate, priority))
    }
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

function addTaskToProject(projectName) {
    projectList[projectName].addTask(document.querySelector('#task-name').value, 
        document.querySelector('#task-description').value, 
        document.querySelector('#due-date').value, 
        document.querySelector('#priority').value
    )  
}

console.log(projectList)
export {storeProject, addTaskToProject, getProjectList, removeTask, changeTask, getTaskDetails}