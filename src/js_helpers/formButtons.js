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

export {initCloseBtns}