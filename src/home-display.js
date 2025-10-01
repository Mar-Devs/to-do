import {format} from "date-fns"


function dateGetter(){
    let date = format(new Date(), "yyyy-MM-dd")
    date = date.split("-")

    return date
}

function dayNumbered(){
    let dayNum = new Date()
    dayNum = dayNum.getDay()

    return dayNum
}

let date = dateGetter()
let dayNumber = dayNumbered()


function formattingDate(){
    let formatted
    let day = date[2]
    day = day.toString()
    let month = date[1]
    let monthArray = [["January"],["February"],["March"],["April"],["May"],["June"],["July"],["August"],["September"],["October"],["November"],["December"]]
    let textMonth = monthArray[month-1]
    let daysArray = [["Sunday"],["Monday"],["Tuesday"],["Wednesday"],["Thursday"],["Friday"],["Saturday"],["Sunday"]]
    let textDay = daysArray[dayNumber]

    if(day === "01" || day === "21" || day === "31"){
        formatted = `${textDay}, ${day}st of ${textMonth}`
    }
    else if(day === "02" || day === "22"){
        formatted = `${textDay}, ${day}nd of ${textMonth}`
    }
    else if(day === "03" || day === "23"){
        formatted = `${textDay}, ${day}rd of ${textMonth}`
    }
    else{
        formatted = `${textDay}, ${day}th of ${textMonth}`
    }

    return formatted
}

export{formattingDate}