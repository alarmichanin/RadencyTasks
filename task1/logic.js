import * as functions from './functions.js'
import * as statFunc from './statisticTable.js'
import * as defaultObjs from './defaultObj.js'
let createBtn = document.querySelector('#createNote')
let archiveBtn = document.querySelector('#hideArchive')
let doneBtn = document.querySelector('#done')
let editBtn = document.querySelector('#editBtn')
let editBox = document.querySelector('#editBox')
let checkBox = document.querySelector("#dateOn")
let form = document.querySelector('#formForList')
let table = document.querySelector('#newTable')
let archTable = document.querySelector('#archiveTable')
let statisticTable = document.querySelector('#statisticTable')
let list = [].concat(defaultObjs.massOfObjs)
let archive = []
let edElem

let archiveDiv = document.querySelector('#archiveDiv')
functions.writeTableWithDefault(list, table)
fillStats()


createBtn.addEventListener("click", () => {
    form.style.display = "block"
    doneBtn.style.display = "block"
    editBtn.style.display = "none"
    editBox.style.display = "none"
    functions.editElementInTableUnableDefault()
})

doneBtn.addEventListener("click", () => {
    let memberOfList = functions.writeData(list)
    if (memberOfList)
        functions.writeNewElemToTable(memberOfList, table, list.length)
    fillStats()
})

archiveBtn.addEventListener("click", () => {
    archiveDiv.style.display = "none"
})


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
            edElem = e.target
            functions.editElementInTableSetDefault(e.target.parentElement.parentElement.parentElement, list)
            editBtn.addEventListener("click", () => {
                functions.editElementInTable(edElem.parentElement.parentElement.parentElement, list, table)
            })
            break
        case "arch":
            functions.archiveElementInTable(e.target.parentElement.parentElement.parentElement, list, archive, archTable)
            fillStats()
            break
        case "del":
            functions.deleteElemFromTable(e.target.parentElement.parentElement.parentElement, list)
            fillStats()
            break
        case "archive":
            archiveDiv.style.display = "flex"
            break
    }
    return false
})
archTable.addEventListener("click", e => {
    switch (e.target.id) {
        case "removeFromArch":
            functions.removeElementFromArch(e.target.parentElement.parentElement, list, archive, table)
            fillStats()
            break
    }
})

function fillStats() {
    let statsList = statFunc.prepareData(list)
    let statsArch = statFunc.prepareData(archive)
    statFunc.writeData(statsList, statsArch, statisticTable)
}