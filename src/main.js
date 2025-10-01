import "./main.css"
import "./home-display.css"
import menuIconImg from "./assests/icons/menu_24dp_1A2A80_FILL0_wght400_GRAD0_opsz24.svg"
import menuCloseImg from "./assests/icons/close_24dp_1A2A80_FILL0_wght400_GRAD0_opsz24.svg"
import {formattingDate} from "./home-display.js"
import { groupOrder } from "./to-do-class.js"

function mobileNav(){
    const viewPort = window.matchMedia("(max-width: 1100px)")
    const nav = document.querySelector(".topNav")
    if(viewPort.matches){
    const lis = document.querySelectorAll(".hideOnMobile")
    lis.forEach(lis => {
        lis.remove()
    })
    const menuIcon = document.createElement("img")
    menuIcon.src = menuIconImg
    menuIcon.setAttribute('alt','open menu button')
    nav.appendChild(menuIcon)

    menuIcon.addEventListener("click",()=>{
        mobileSideBar()
    })
    }
}

function mobileSideBar(){
    const sideBar = document.createElement("div")
    sideBar.className = 'side-bar'
    document.body.appendChild(sideBar)

    const closeImg = document.createElement("img")
    closeImg.src = menuCloseImg
    closeImg.setAttribute('alt', 'close button')
    sideBar.appendChild(closeImg)

    const nav = document.createElement("nav")
    nav.className = 'mobile-nav-bar'
    sideBar.appendChild(nav)

    const ul = document.createElement("ul")
    nav.appendChild(ul)


    const groupsBtn = document.createElement("li")
    groupsBtn.textContent = 'GROUP'
    ul.appendChild(groupsBtn)

    const allTasksBtn = document.createElement("li")
    allTasksBtn.textContent = 'ALL TASKS'
    ul.appendChild(allTasksBtn)

    const completedBtn = document.createElement("li")
    completedBtn.textContent = 'COMPLETED'
    ul.appendChild(completedBtn)

    closeImg.addEventListener("click",() =>{
        sideBar.remove()
    })
}

mobileNav()

function mainBody(){
    let today = formattingDate()
    const date = document.querySelector(".date")
    date.textContent = today
}

mainBody()

let held = groupOrder("mine")
function groups(){
    const selectElement = document.querySelector(".group-selector")
    for(let i = 0; i < held.length; i++){
        const option = document.createElement("option")
        option.textContent = held[i]
        selectElement.appendChild(option)
    }
}

groups()




