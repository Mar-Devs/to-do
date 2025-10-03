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

function groupOrder(input){
    let groupArray = []
    let holder = []
    let check = localStorage.getItem("GroupArray")
    if(check === null){
    groupArray.push("Main")
    localStorage.setItem("GroupArray",groupArray)
    groupArray = []
    localStorage.setItem("MainExists",true)
    }
    else if(input === null){}
    else if(input !== null){
        let mainHolder = localStorage.getItem("GroupArray")
        mainHolder = mainHolder.split(",")
        for(let i = 0; i < mainHolder.length; i++){
            holder.push(mainHolder[i])
        }
        holder.push(input)
        localStorage.setItem("GroupArray",holder)
    }

    return holder
}






function createTask(title,discription,dueDate,priority,group){
    let key = crypto.randomUUID()
    let task = new Task(title,discription,dueDate,priority,group,key)
    localStorage.setItem(key,JSON.stringify(task))

    return key
}

function updateTask(title,discription,dueDate,priority,group,key){
    let task = new Task(title,discription,dueDate,priority,group)
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



export {groupOrder,createTask,updateTask}


