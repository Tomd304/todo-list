import './styles.css'
import {initAllBtns} from './js_helpers/initDOM'
import {generateDOM} from './js_helpers/dynamicDOM'

function createPlaceHolderInfo() {
    storeProject('Default Project', 'Default Description')
    storeProject('Uninmportant Items', 'Uninmportant Description')
    projectList["Default Project"].addTask('Read Email', 'Read all emails from today', '11/12/2021', 1)
    projectList["Default Project"].addTask('Wash Car', 'Wash & wax car', '23/12/2021', 2)
    projectList["Uninmportant Items"].addTask('Celebrate Christmas', 'Enjoy!!!', '25/12/2021', 1)    
}


let projectList = {}
createPlaceHolderInfo()
generateDOM(projectList)
initAllBtns()


function getProjectList() {
    return projectList
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

export {storeProject, addTaskToProject, getProjectList}