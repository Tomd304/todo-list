import './styles.css'
import {initCloseBtns, initCreateBtns} from './js_helpers/formButtons'

let projectList = {}

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
    let toDoList = []

    function addTask(title, desc, dueDate, priority) {
        toDoList.push(createToDo(title, desc, dueDate, priority))
    }

    return {name, description, toDoList, addTaskToProject}
}

function saveProject(name, description) {
    console.log(name) 
    console.log(description)   
    projectList[name] = createProject(name, description)
}

function printProjects() {
    console.log(projectList)
    projectList.forEach(project => {
        console.log(project.name + ': ' + project.description)
    })
}

saveProject('Default Project', 'Default Description')
saveProject('Uninmportant Items', 'Uninmportant Description')
projectList["Default Project"].addTask('Read Email', 'Read all emails from today', '11/12/2021', 1)
projectList["Default Project"].addTask('Wash Car', 'Wash & wax car', '23/12/2021', 2)
projectList["Uninmportant Items"].addTask('Celebrate Christmas', 'Enjoy!!!', '25/12/2021', 1)
initCreateBtns()
initCloseBtns() 
console.log(projectList)

export {saveProject, printProjects}