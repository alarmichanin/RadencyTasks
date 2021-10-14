// work with data
export function writeData(arr) {
    let form = document.querySelector('#formForList')
    let created = document.querySelector('#created').value
    let nameOfPoint = document.querySelector('#nameOfTask').value
    let category = document.querySelector('#category').value
    let content = document.querySelector('#content').value
    let dates = document.querySelector('#startDate').value + ' ' + document.querySelector('#endDate').value
    let memberOfList = writeObj(nameOfPoint, created, category, content, dates)
    arr.push(memberOfList)
    form.style.display = "none"
    return memberOfList
}
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
// work with data in table
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
        newCell.innerHTML = "<div id=\"icons\"><i class=\"far fa-edit\"></i><i class=\"fas fa-inbox\"></i> <i class=\"far fa-trash-alt\"></i></div>"
    }
}
export function writeNewElemToTable(memberOfList, table, rowInd) {
    let row = table.insertRow(rowInd)
    let i = 0
    for (let atr in memberOfList) {
        let newCell = row.insertCell(i)
        i++
        newCell.innerHTML = memberOfList[atr]
    }
    let newCell = row.insertCell(i)
    newCell.innerHTML = "<div id=\"icons\"><i class=\"far fa-edit\"></i><i class=\"fas fa-inbox\"></i> <i class=\"far fa-trash-alt\"></i></div>"
}

export function deleteElemFromTable() {

}

// hiding date in form
export function dateOn() {
    let dateBlock = document.querySelector("#blockWithDate")
    dateBlock.style.display = "block"
}
export function dateOff() {
    let dateBlock = document.querySelector("#blockWithDate")
    dateBlock.style.display = "none"
}