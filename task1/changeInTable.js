import { writeNewElemToTable, months } from "./functions.js"
export function getIndOfElem(element, list) {
    let index
    let nameOfPoint = element.children[0].innerText
    list.map((elem, ind) => {
        if (elem.name == nameOfPoint)
            index = ind
    })
    return index
}
//remove some element from the table
export function deleteElemFromTable(element, list) {
    let indForDel = getIndOfElem(element, list)
    list.splice(indForDel, 1)
    element.remove()
}

//set and clean default inputs' values
export function editElementInTableSetDefault(element, list) {
    let indForEdit = getIndOfElem(element, list)
    document.querySelector("#nameOfTask").value = list[indForEdit].name
    if (list[indForEdit].category != "Random Thought")
        document.querySelector("#category").value = list[indForEdit].category
    else
        document.querySelector("#category").value = "RandomThought"
    document.querySelector("#content").value = list[indForEdit].content
}
//return default values in inputs
export function editElementInTableUnableDefault() {
    document.querySelector("#nameOfTask").value = ""
    document.querySelector("#category").value = "Task"
    document.querySelector("#content").value = ""
}
//edit some element in the table
export function editElementInTable(element, list, table) {
    try {
        let form = document.querySelector('#formForList')
        let indForEdit = getIndOfElem(element, list)
        list[indForEdit].name = document.querySelector('#nameOfTask').value
        list[indForEdit].content = document.querySelector('#content').value
        list[indForEdit].category = document.querySelector('#category').value
        if (document.querySelector('#endDate').value) {
            let newDate = new Date(document.querySelector('#endDate').value)
            list[indForEdit].dates = list[indForEdit].created + ", " + months[newDate.getMonth()] + " " + newDate.getDate() + " " + newDate.getFullYear()
        }
        table.deleteRow(indForEdit + 1)
        writeNewElemToTable(list[indForEdit], table, indForEdit + 1)
        form.style.display = "none"
    } catch (err) {
        console.log(err)
    }
    return list
}