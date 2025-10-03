import { updateTask } from "./to-do-class"


function editPopUp(keys){
    let key = keys
    let [fetchedTitle, fetchedDescription, fetchedDueDate, fetchedGroup, fetchedPriority] = getItem(key)
    console.log(fetchedTitle)
    const mainDisplayDiv = document.querySelector(".main-display")
    const formDiv = document.createElement("div")
    formDiv.className = 'form-container'
    mainDisplayDiv.appendChild(formDiv)

    const h2 = document.createElement("h2")
    h2.textContent = 'Add Task'
    formDiv.appendChild(h2)

    const form = document.createElement("form")
    form.className = 'container'
    formDiv.appendChild(form)

    const titleDiv = document.createElement("div")
    titleDiv.className = 'title-div'
    form.appendChild(titleDiv)

    const titleLabel = document.createElement("label")
    titleLabel.setAttribute('for','title')
    titleLabel.textContent = 'Title:'
    titleDiv.appendChild(titleLabel)

    const titleInput = document.createElement("input")
    titleInput.setAttribute('type','text')
    titleInput.setAttribute('name','title')
    titleInput.setAttribute('id','title')
    titleInput.required = true
    titleInput.value = fetchedTitle
    titleLabel.appendChild(titleInput)

    const descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute('for','description')
    descriptionLabel.textContent = 'Description:'
    form.appendChild(descriptionLabel)

    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute('type','text')
    descriptionInput.setAttribute('name','description')
    descriptionInput.setAttribute('id','description')
    descriptionInput.value = fetchedDescription
    descriptionLabel.appendChild(descriptionInput)

    const dueDate = document.createElement("label")
    dueDate.setAttribute('for','dueDate')
    dueDate.textContent = 'Due Date:'
    form.appendChild(dueDate)

    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute('type','date')
    dueDateInput.setAttribute('name','date')
    dueDateInput.setAttribute('id','date')
    dueDateInput.value = fetchedDueDate
    dueDate.appendChild(dueDateInput)


    const priorityLabel = document.createElement("label")
    priorityLabel.textContent = 'Priority:'
    priorityLabel.setAttribute('for','priority')
    form.appendChild(priorityLabel)

    const prioritySelect = document.createElement("select")
    prioritySelect.setAttribute('name','priority')
    prioritySelect.setAttribute('id','priority')
    priorityLabel.appendChild(prioritySelect)

    const defaultOption = document.createElement("option")
    defaultOption.setAttribute('value','')
    defaultOption.textContent = fetchedPriority
    prioritySelect.appendChild(defaultOption)

    const highOption = document.createElement("option")
    highOption.setAttribute('value','high')
    highOption.textContent = 'High'
    prioritySelect.appendChild(highOption)

    const mediumOption = document.createElement("option")
    mediumOption.setAttribute('value','Medium')
    mediumOption.textContent = 'Medium'
    prioritySelect.appendChild(mediumOption)

    const lowOption = document.createElement("option")
    lowOption.setAttribute('value','Low')
    lowOption.textContent = 'Low'
    prioritySelect.appendChild(lowOption)

    const groupDiv = document.createElement("div")
    groupDiv.className = 'group-div'
    form.appendChild(groupDiv)

    const groupLabel = document.createElement("label")
    groupLabel.textContent = 'Group:'
    groupLabel.setAttribute('for','group')
    groupDiv.appendChild(groupLabel)

    const groupSelect = document.createElement("select")
    groupSelect.setAttribute('name','group')
    groupLabel.appendChild(groupSelect)

    const groupDefaultOption = document.createElement("option")
    groupDefaultOption.setAttribute('value','')
    groupDefaultOption.textContent = fetchedGroup
    groupSelect.appendChild(groupDefaultOption)

    const createBtn = document.createElement("button")
    createBtn.className = 'create-button'
    createBtn.textContent = 'Save'
    form.appendChild(createBtn)

    createBtn.addEventListener("click",(event)=>{
        event.preventDefault()
        updateTask(titleInput.value,descriptionInput.value,dueDateInput.value,prioritySelect.value,groupSelect.value,key)
        formDiv.remove()
        
    })

    const cancelBtn = document.createElement("button")
    cancelBtn.className = 'cancel-button'
    cancelBtn.textContent = 'Cancel'
    form.appendChild(cancelBtn)

    cancelBtn.addEventListener("click",()=>{
        formDiv.remove()
    })

}



function getItem(key){
    let item = localStorage.getItem(key)
    item = JSON.parse(item)
    let title = item.title
    let discription = item.discription
    let dueDate = item.dueDate
    let group = item.group
    let priority = item.priority

    return [title,discription,dueDate,group,priority]
}





export{editPopUp}