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

function createTableRow(task, project) {
    let row = document.createElement('tr')
    let title = document.createElement('td')
    title.textContent = task.title
    let desc = document.createElement('td')
    desc.textContent = task.desc
    let dueDate = document.createElement('td')
    dueDate.textContent = task.dueDate
    let priority = document.createElement('td')
    priority.textContent = task.priority
    let btns = document.createElement('td')
    let changeBtn = document.createElement('button')
    changeBtn.classList.add('change-btn')
    changeBtn.textContent = 'change'
    changeBtn.id = task.title + '-btn-' + project
    btns.appendChild(changeBtn)
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn')
    removeBtn.textContent = 'remove'
    removeBtn.id = task.title + '-btn-' + project
    btns.appendChild(removeBtn)

    row.append(title, desc, dueDate, priority, btns)
    return row

}

function createTable(project) {
    
    let table = createTableHeader(project.name)
    project.toDoList.forEach((task) => {
        table.appendChild(createTableRow(task, project.name))
    })
    return table
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

export {createAllTables}