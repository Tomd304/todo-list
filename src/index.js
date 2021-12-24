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
    createAllTables(projectList)
}

function printProjects() {
    console.log(projectList)
    projectList.forEach(project => {
        console.log(project.name + ': ' + project.description)
    })
}

function createTable(project) {
    
    let table = createTableHeader(project.name)
    project.toDoList.forEach((task) => {
        table.appendChild(createTableRow(task))
    })
    return table
}

function createTableHeader(projectName) {
    let table = document.createElement('table')
    let colGroup = document.createElement('colgroup')
    let col1 = document.createElement('col')
    col1.span = 1
    col1.style = 'width: 10%'
    let col2 = document.createElement('col')
    col2.span = 1
    col2.style = 'width: 35%'
    let col3 = document.createElement('col')
    col3.span = 1
    col3.style = 'width: 10%'
    let col4 = document.createElement('col')
    col4.span = 1
    col4.style = 'width: 10%'
    let col5 = document.createElement('col')
    col5.span = 1
    col5.style = 'width: 10%'
    colGroup.append(col1, col2, col3, col4, col5)

    let row = document.createElement('tr')
    let hTitle = document.createElement('th')
    hTitle.textContent = 'Task'
    let hDesc = document.createElement('th')
    hDesc.textContent = 'Description'
    let hDueDate = document.createElement('th')
    hDueDate.textContent = 'Due Date'
    let hPriority = document.createElement('th')
    hPriority.textContent = 'Priority'
    let addTask = document.createElement('th')
    let addBtn = document.createElement('button')
    addBtn.classList.add('add-btn')
    addBtn.textContent = 'add task'
    addBtn.id = projectName + '-add-btn'
    addTask.appendChild(addBtn)
    row.append(hTitle, hDesc, hDueDate, hPriority, addTask)
    table.append(colGroup, row)
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
    let remove = document.createElement('td')
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn')
    removeBtn.textContent = 'remove'
    removeBtn.id = task.title + '-btn'
    remove.appendChild(removeBtn)
    row.append(title, desc, dueDate, priority, remove)
    return row

}

function createAllTables(projectList) {
    let container = document.querySelector('#table-container')
    container.innerHTML = ''
    
    Object.keys(projectList).forEach((project) => {
        let heading = document.createElement('h2')
        heading.textContent = project
        container.appendChild(heading)
        container.appendChild(createTable(projectList[project]))
    });
}






saveProject('Default Project', 'Default Description')
saveProject('Uninmportant Items', 'Uninmportant Description')
projectList["Default Project"].addTask('Read Email', 'Read all emails from today', '11/12/2021', 1)
projectList["Default Project"].addTask('Wash Car', 'Wash & wax car', '23/12/2021', 2)
projectList["Uninmportant Items"].addTask('Celebrate Christmas', 'Enjoy!!!', '25/12/2021', 1)
initCreateBtns()
initCloseBtns() 

//createAllTables(projectList)
createAllTables(projectList)

export {saveProject, printProjects}