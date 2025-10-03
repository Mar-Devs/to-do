import "./main.css"
import "./home-display.css"
import "./add-task.css"
import "./task-display.css"
import {formattingDate,dateGetter} from "./home-display.js"
import { groupOrder } from "./to-do-class.js"
import { createPopUp } from "./add-task.js"
import { conforms } from "lodash"



function mainBody(){
    let funcDate = dateGetter()
    let today = formattingDate(funcDate)
    const date = document.querySelector(".date")
    date.textContent = today
}

mainBody()




function groups(){
    const groupP = document.querySelector(".group-label")
    const selectElement = document.querySelector(".group-selector")
    let held = groupOrder(null)
    for(let i = 0; i < held.length; i++){
        const option = document.createElement("option")
        option.setAttribute('value',held[i])
        option.textContent = held[i]
        selectElement.appendChild(option)
    }

    selectElement.addEventListener("change",(event)=>{
        console.log(`You chose ${event.target.value}`)
        groupP.textContent = event.target.value

    })

}


function createTaskGroups(selectElement,pElement,boolean){
    let held = groupOrder(null)
    let count = 0
    if(count === 0){
        ++count
    const main = document.createElement("option")
    main.textContent = "Main"
    main.setAttribute('value',"Main")
    selectElement.appendChild(main)
    }
    for(let i =0; i < held.length; i++){
        const option = document.createElement("option")
        option.setAttribute('value',held[i])
        option.textContent = held[i]
        selectElement.appendChild(option)
        console.log(option.value)
    }
    if(boolean === true){
         selectElement.addEventListener("change",(event)=>{
        console.log(`You chose ${event.target.value}`)
        pElement.textContent = event.target.value
    })
}
}

   function mainGroupSelector(){
    let count = 0
    const groupP = document.querySelector(".group-label")
    const selectElement = document.querySelector(".group-selector")
    selectElement.addEventListener("click",()=>{
        ++count
        createTaskGroups(selectElement,groupP,true)
    })
}


mainGroupSelector()

const addBtn = document.querySelector(".add")
addBtn.addEventListener("click",()=>{
    createPopUp()
})

function deleted(){
    const deletes = document.createElement("button")
    deletes.style.backgroundColor = 'white'
    deletes.style.position = 'fixed'
    deletes.style.zIndex = '2'
    document.body.appendChild(deletes)
    deletes.textContent = "Clear Memory"
    deletes.addEventListener("click",()=>{
        localStorage.clear()
        alert("Cleared!")
    })
}

deleted()


export{createTaskGroups}
