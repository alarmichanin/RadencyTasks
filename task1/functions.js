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
}
