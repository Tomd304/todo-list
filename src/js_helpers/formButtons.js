const initCloseBtns = () => {
    let taskExitBtn = document.querySelector('#exit-task-btn')
    taskExitBtn.addEventListener('click', () => {
        console.log('taskexit pressed')
        document.querySelector('#new-task-form').style.display = 'none'
    })

    let projectExitBtn = document.querySelector('#exit-project-btn')
    projectExitBtn.addEventListener('click', () => {
        console.log('projectexit pressed')
        document.querySelector('#new-project-form').style.display = 'none'
    })    
}

const initCreateBtns = () => {
    let createProjectbtn = document.querySelector('#submitProject')
    createProjectbtn.addEventListener('click', () => {
        if (document.querySelector('#project-name').textContent != ' ' && document.querySelector('#project-description').textContent != ' ') {
            console.log('saved')
            document.querySelector('#new-project-form').style.display = 'none'
        }
    })    
}



export {initCloseBtns, initCreateBtns}