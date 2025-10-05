import { createTaskContainer } from "./task-display"

function iterate(){
    for(let i = 0; i < localStorage.length; i++){
        let toParse = localStorage.key(i)
        console.log(toParse)
        try{
        let getTask = localStorage.getItem(toParse)
        let task = JSON.parse(getTask)
        console.log(typeof task)
        let title = task.title
        let description = task.discription
        let dueDate = task.dueDate
        let priority = task.priority
        let group = task.group
        console.log(group)
        createTaskContainer(title,description,dueDate,priority,toParse,true)
        } catch(e){
            console.log("This isn't a parsable item")
        }
    }
}

export {iterate}
// title,discription,dueDate,priority,group,key