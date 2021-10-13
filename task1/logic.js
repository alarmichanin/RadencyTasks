import * as functions from './functions.js'
import * as defaultObjs from './defaultObj.js'
let createBtn = document.querySelector('#createNote')
let form = document.querySelector('#formForList')
let table = document.querySelector('#newTable')
let list = [].concat(defaultObjs.massOfObjs)
functions.writeTableWithDefault(list, table)

let doneBtn = document.querySelector('#done')
createBtn.addEventListener("click", () => {
    form.style.display = "block"
})
doneBtn.addEventListener("click", () => {
    let created = document.querySelector('#created').value
    let nameOfPoint = document.querySelector('#nameOfTask').value
    let category = document.querySelector('#category').value
    let content = document.querySelector('#content').value
    let dates = document.querySelector('#startDate').value + ' ' + document.querySelector('#endDate').value
    let memberOfList = functions.writeObj(nameOfPoint, created, category, content, dates)
    list.push(memberOfList)
    form.style.display = "none"
    functions.writeNewElemToTable(memberOfList, table, list.length)
})


