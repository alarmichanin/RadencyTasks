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
    let memberOfList = functions.writeData(list)
    if (memberOfList)
        functions.writeNewElemToTable(memberOfList, table, list.length)
})

let checkBox = document.querySelector("#dateOn")
checkBox.addEventListener("change", e => {
    if (e.target.checked)
        functions.dateOn()
    else
        functions.dateOff()
})


