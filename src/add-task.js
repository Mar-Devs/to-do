import { createTask } from "./to-do-class"
import { createTaskGroups } from "./main"
import { groupOrder } from "./to-do-class.js"
import { createTaskContainer } from "./task-display.js"


function createPopUp(){
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
    titleLabel.appendChild(titleInput)

    const descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute('for','description')
    descriptionLabel.textContent = 'Description:'
    form.appendChild(descriptionLabel)

    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute('type','text')
    descriptionInput.setAttribute('name','description')
    descriptionInput.setAttribute('id','description')
    descriptionLabel.appendChild(descriptionInput)

    const dueDate = document.createElement("label")
    dueDate.setAttribute('for','dueDate')
    dueDate.textContent = 'Due Date:'
    form.appendChild(dueDate)

    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute('type','date')
    dueDateInput.setAttribute('name','date')
    dueDateInput.setAttribute('id','date')
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
    defaultOption.textContent = '--Select Priority--'
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
    groupDefaultOption.textContent = '--Select Group--'
    groupSelect.appendChild(groupDefaultOption)

    createTaskGroups(groupSelect,null,false)

    const newGroupBtn = document.createElement("button")
    newGroupBtn.className = 'add-group-button'
    newGroupBtn.textContent = 'New Group'
    groupDiv.appendChild(newGroupBtn)
    

    newGroupBtn.addEventListener("click",()=>{
        newGroup(formDiv)
    })

    const createBtn = document.createElement("button")
    createBtn.className = 'create-button'
    createBtn.textContent = 'Create'
    form.appendChild(createBtn)

    createBtn.addEventListener("click",(event)=>{
        event.preventDefault()
        let key = eventListerns(titleInput,descriptionInput,dueDateInput,prioritySelect,groupSelect,newGroupBtn,createBtn,cancelBtn)
        createTaskContainer(titleInput,descriptionInput,dueDateInput,prioritySelect,key,false)
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

function eventListerns(titleInput,descriptionInput,dueDateInput,prioritySelect,groupSelect,newGroupBtn,createBtn,cancelBtn){
    let title = titleInput.value
    let description = descriptionInput.value
    let dueDate = dueDateInput.value
    let priority = prioritySelect.value
    let group = groupSelect.value
    let key = createTask(title,description,dueDate,priority,group)

    return key

}


function newGroup(formDiv){
    const newGroupDiv = document.createElement("div")
    newGroupDiv.className = 'new-group-div'
    formDiv.appendChild(newGroupDiv)

    const label = document.createElement("label")
    label.textContent = 'Group Name'
    label.setAttribute('form','new-group')
    newGroupDiv.appendChild(label)

    const input = document.createElement("input")
    input.setAttribute('type','text')
    input.setAttribute('name','new-group')
    label.appendChild(input)

    const btn = document.createElement("button")
    btn.textContent = 'CREATE'
    newGroupDiv.appendChild(btn)

    btn.addEventListener("click",()=>{
        let newGroupName = input.value
        groupOrder(newGroupName)

    })
}

export {createPopUp}