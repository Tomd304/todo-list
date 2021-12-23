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

    return {name, description, toDoList, addTask}
}

function saveProject(name, description) {
    console.log(name) 
    console.log(description)   
    projectList[name] = createProject(name, description)
    createTable(projectList[name])
}

function printProjects() {
    console.log(projectList)
    projectList.forEach(project => {
        console.log(project.name + ': ' + project.description)
    })
}

function createTable(project) {
    let pane = document.querySelector('.right-pane')
    let table = createTableHeader(project.name)
    project.toDoList.forEach((task) => {
        table.appendChild(createTableRow(task))
    })
    pane.appendChild(table)
}

function createTableHeader(projectName) {
    let table = document.createElement('table')
    let row = document.createElement('tr')
    let hTitle = document.createElement('th')
    hTitle.textContent = 'Task'
    let hDesc = document.createElement('th')
    hDesc.textContent = 'Description'
    let hDueDate = document.createElement('th')
    hDueDate.textContent = 'Due Date'
    let hPriority = document.createElement('th')
    hPriority.textContent = 'Priority'
    row.append(hTitle, hDesc, hDueDate, hPriority)
    let heading = document.createElement('h2')
    heading.textContent = projectName
    table.append(heading, row)
    return table
}

function createTableRow(task) {
    let row = document.createElement('tr')
    let title = document.createElement('td')
    title.textContent = task.title
    let desc = document.createElement('td')
    desc.textContent = task.desc
    let dueDate = document.createElement('td')
    dueDate.textContent = task.dueDate
    let priority = document.createElement('td')
    priority.textContent = task.priority
    row.append(title, desc, dueDate, priority)
    return row

}







saveProject('Default Project', 'Default Description')
saveProject('Uninmportant Items', 'Uninmportant Description')
projectList["Default Project"].addTask('Read Email', 'Read all emails from today', '11/12/2021', 1)
projectList["Default Project"].addTask('Wash Car', 'Wash & wax car', '23/12/2021', 2)
projectList["Uninmportant Items"].addTask('Celebrate Christmas', 'Enjoy!!!', '25/12/2021', 1)
initCreateBtns()
initCloseBtns() 

createTable(projectList["Default Project"])
createTable(projectList["Uninmportant Items"])
console.log(projectList)

export {saveProject, printProjects}