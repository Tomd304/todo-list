import './styles.css'
import {initCloseBtns, initCreateBtns} from './js_helpers/formButtons'

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

function createProject(projectName, projectDescription) {
    return {projectName,
            projectDescription}
}

let projectList = []
projectList.push(createProject('Todays jobs', 'list of jobs for today'))
projectList.push(createProject('Tomorrows jobs', 'list of jobs for tomorrow'))

projectList.forEach(project => {
    console.log(project.projectName + ': ' + project.projectDescription)
})

initCreateBtns()
initCloseBtns() 