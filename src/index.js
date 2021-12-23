import './styles.css'
import {initCloseBtns, initCreateBtns} from './js_helpers/formButtons'

let projectList = []

function createToDo(title, desc, dueDate, priority) {
    return {title, desc, dueDate, priority}
}

let createTaskBtn = document.querySelector('#create-task')
createTaskBtn.addEventListener('click', (e) => {
    document.querySelector('#new-task-form').style.display = 'flex'
});

let createProjectBtn = document.querySelector('#create-project')
createProjectBtn.addEventListener('click', (e) => {
    document.querySelector('#new-project-form').style.display = 'flex'
});

function createProject(name, description) {
    return {name,
            description}
}

function saveProject(name, description) {
    console.log(name) 
    console.log(description)   
    projectList.push(createProject(name, description))
}



function printProjects() {
    console.log(projectList)
    projectList.forEach(project => {
        console.log(project.name + ': ' + project.description)
    })
}


initCreateBtns()
initCloseBtns() 

export {saveProject, printProjects}