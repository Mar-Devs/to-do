const { create } = require("lodash")

class Task{
    constructor(title,discription,dueDate,priority,group,key){
        this.title = title
        this.discription = discription
        this.dueDate = dueDate
        this.priority = priority
        this.group = group
        this.key = key
    }
}


function createTask(title,discription,dueDate,priority,group){
    let key = crypto.randomUUID()
    let task = new Task(title,discription,dueDate,priority,group,key)
    localStorage.setItem(key,JSON.stringify(task))
}



function getItem(groupName){
    for(let i =0; i < localStorage.length; i++){
    let keyed = localStorage.key(i)
    let parse = localStorage.getItem(keyed)
    let parsed = JSON.parse(parse)
    if(parsed.group === groupName){
        console.log(typeof parsed)
    }
}
}

function deleteItem(key){
    localStorage.removeItem(key)
}



