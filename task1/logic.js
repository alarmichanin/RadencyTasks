import * as functions from './functions.js'
import * as defaultObjs from './defaultObj.js'
let createBtn = document.querySelector('#createNote')
let form = document.querySelector('#formForList')
let table = document.querySelector('#newTable')
let list = [].concat(defaultObjs.massOfObjs)
let archive = []
let editBtn = document.querySelector('#editBtn')
let editBox = document.querySelector('#editBox')
functions.writeTableWithDefault(list, table)


createBtn.addEventListener("click", () => {
    form.style.display = "block"
    doneBtn.style.display = "block"
    editBtn.style.display = "none"
    editBox.style.display = "none"
    functions.editElementInTableUnableDefault()
})
let doneBtn = document.querySelector('#done')
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

table.addEventListener("click", e => {
    switch (e.target.id) {
        case "edit":
            form.style.display = "block"
            doneBtn.style.display = "none"
            editBtn.style.display = "block"
            editBox.style.display = "block"
            functions.editElementInTableSetDefault(e.target.parentElement.parentElement.parentElement, list)
            editBtn.addEventListener("click", () => {
                functions.editElementInTable(e.target.parentElement.parentElement.parentElement, list, table)
            })
            break
        case "arch":
            functions.archiveElementInTable(e.target.parentElement.parentElement.parentElement, list, archive)
            break
        case "del":
            functions.deleteElemFromTable(e.target.parentElement.parentElement.parentElement, list)
            break
    }
})
