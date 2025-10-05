import editIcons from "./assests/icons/edit_24dp_1A2A80_FILL0_wght400_GRAD0_opsz24.svg"
import checkIcons from "./assests/icons/check_box_outline_blank_24dp_1A2A80_FILL0_wght400_GRAD0_opsz24.svg"
import deleteIcons from "./assests/icons/delete_24dp_C2A68C_FILL0_wght400_GRAD0_opsz24.svg"
import {format} from "date-fns"
import { editPopUp } from "./edit-task"
import { or } from "ajv/dist/compile/codegen"


function createGridContainer(){
    const mainDisplay = document.querySelector(".main-display")
    const gridContainer = document.createElement("div")
    gridContainer.className = 'grid-container'
    mainDisplay.appendChild(gridContainer)

    return gridContainer
}

let gridContainer = createGridContainer()

function createTaskContainer(title,description,dueDate,priority,key,memoryReading){
    let titled, descriptiond, priorityd,dueDated
    let theItem = localStorage.getItem(key)
    theItem = JSON.parse(theItem)
    if(memoryReading === false){
    titled = theItem.title
    descriptiond = theItem.discription
    priorityd = theItem.priority
    dueDated = theItem.dueDate
    }
    else if(memoryReading === true){
       titled = title
       descriptiond = description
       priorityd = priority
       dueDated = dueDate     
    }


     try{
        dueDated = format(dueDated, "d.MM.yy")
     } catch(e){
        dueDated = format(new Date(), "dd.MM.yy")
     }
    
    const resultContainer = document.createElement("div")
    resultContainer.className = 'result-container'
    gridContainer.appendChild(resultContainer)

    const colorContainer = document.createElement("div")
    colorContainer.className = 'color-container'
    resultContainer.appendChild(colorContainer)

    if(priorityd === "High"){
        colorContainer.style.backgroundColor = "#FF0C10"
    }
    else if(priorityd === "Medium"){
        colorContainer.style.backgroundColor = "#FF7018"
    }
    else if(priorityd === "Low"){
        colorContainer.style.backgroundColor = "#4CEB03"
    }

    const infoContainer = document.createElement("div")
    infoContainer.className = 'info-container'
    resultContainer.appendChild(infoContainer)

    const deleteIcon = document.createElement("img")
    deleteIcon.src = deleteIcons
    infoContainer.appendChild(deleteIcon)

    deleteIcon.addEventListener("click",()=>{
        localStorage.removeItem(key)
        resultContainer.remove()
    })

    const h3 = document.createElement("h3")
    h3.textContent = titled
    infoContainer.appendChild(h3)

    const p = document.createElement("p")
    p.textContent = descriptiond
    infoContainer.appendChild(p)

    const icons = document.createElement("div")
    icons.className = 'icons'
    infoContainer.appendChild(icons)

    const editIcon = document.createElement("img")
    editIcon.src = editIcons
    editIcon.className = 'edit'
    icons.appendChild(editIcon)

    editIcon.addEventListener("click",()=>{
        editPopUp(key)
    })

    const dateDisplay = document.createElement("time")
    dateDisplay.textContent = dueDated
    icons.appendChild(dateDisplay)

    const checkIcon = document.createElement("img")
    checkIcon.src = checkIcons
    checkIcon.className = 'check'
    icons.appendChild(checkIcon)

    let count = 0
    checkIcon.addEventListener("click",()=>{
        if(count === 0){
        checkText(h3,p)
        ++count
        }
        else if(count > 0){
            unChkecText(h3,p)
            count = 0
        }
    })

    return [h3,p,dateDisplay]
}


function checkText(item1,item2){
    item1.style.textDecoration = 'line-through'
    item2.style.textDecoration = 'line-through'

}

function unChkecText(item1,item2){
    item1.style.textDecoration = 'none'
    item2.style.textDecoration = 'none'
}


// I need a function to update the display
// so if the discription has been edited then the text content will be updated, and so on


export {createTaskContainer}