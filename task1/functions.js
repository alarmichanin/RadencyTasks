let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// work with data
export function writeData(arr) {
    let form = document.querySelector('#formForList')
    let date = new Date
    let created = months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
    let nameOfPoint = document.querySelector('#nameOfTask').value
    let category = document.querySelector('#category').value
    let content = document.querySelector('#content').value
    let dates = ""
    if (!nameOfPoint || !content) {
        alert("Name of point and content can't be empty")
        return false
    } else {
        let memberOfList = writeObj(nameOfPoint, created, category, content, dates)
        arr.push(memberOfList)
        form.style.display = "none"
        return memberOfList
    }
}
//write data in obj 
export function writeObj(nameOfPoint, created, category, content, dates) {
    let objForList = {}
    try {
        objForList.name = nameOfPoint
        objForList.created = created
        objForList.category = category
        objForList.content = content
        objForList.dates = dates
    } catch (err) {
        return console.log(err)
    }
    return objForList
}
// fills table with default values
export function writeTableWithDefault(mass, table) {
    let j = 1
    for (let elem in mass) {
        let row = table.insertRow(j)
        j++
        let k = 0
        for (let atr in mass[elem]) {
            let newCell = row.insertCell(k)
            k++
            newCell.innerHTML = mass[elem][atr]
        }
        let newCell = row.insertCell(k)
        newCell.innerHTML = `<div id=\"icons\"><i class=\"far fa-edit\" id=\"edit\" ></i><i class=\"fas fa-inbox\" id=\"arch\"></i> <i class=\"far fa-trash-alt\" id=\"del\" ></i></div>`
    }
}

// work with elements in table
export function writeNewElemToTable(memberOfList, table, rowInd) {
    let row = table.insertRow(rowInd)
    let i = 0
    for (let atr in memberOfList) {
        let newCell = row.insertCell(i)
        i++
        newCell.innerHTML = memberOfList[atr]
    }
    let newCell = row.insertCell(i)
    newCell.innerHTML = `<div id=\"icons\"><i class=\"far fa-edit\" id=\"edit\"></i><i class=\"fas fa-inbox\" id=\"arch\" ></i> <i class=\"far fa-trash-alt\" id=\"del\"></i></div>`
}
function getIndOfElem(element, list) {
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
        console.log("Catch ERR")
    }
    return list
}
//archive some element
export function archiveElementInTable(element, list, archive, table) {
    element.remove()
    let indInList = getIndOfElem(element, list)
    archive.push(list[indInList])
    list.splice(indInList, 1)
    let row = table.insertRow(archive.length)
    let i = 0
    for (let atr in archive[archive.length - 1]) {
        let newCell = row.insertCell(i)
        i++
        newCell.innerHTML = archive[archive.length - 1][atr]
    }
    let newCell = row.insertCell(i)
    newCell.innerHTML = `<i class="fas fa-times-circle" id=\"removeFromArch\"></i>`

}
//removing from archive table element and paste it in the general table
export function removeElementFromArch(element, list, archive, table) {
    element.remove()
    let indInList = getIndOfElem(element, archive)
    list.push(archive[indInList])
    archive.splice(indInList, 1)
    writeNewElemToTable(list[list.length - 1], table, list.length)
}
// hiding date in form
let dateBlock = document.querySelector("#blockWithDate")
export function dateOn() {
    dateBlock.style.display = "block"
}
export function dateOff() {
    dateBlock.style.display = "none"
}

