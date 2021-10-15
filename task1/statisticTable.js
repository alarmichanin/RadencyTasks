//work with statistic 
export function prepareData(arr) {
    let stats = {
        task: 0,
        idea: 0,
        random: 0
    }
    arr.map(elem => {
        switch (elem.category) {
            case "Task":
                stats.task += 1
                break
            case "Idea":
                stats.idea += 1
                break
            case "RandomThought":
                stats.random += 1
                break
            case "Random Thought":
                stats.random += 1
                break
        }
    })
    return [stats.task, stats.idea, stats.random]
}

export function writeData(stats, statsArch, table) {
    let names = ["Task", "Idea", "Random Thought"]
    if (table.children[0].children.length <= 1) {
        for (let i = 0; i < 3; i++) {
            let row = table.insertRow(i + 1)
            let data = `<td>${names[i]}</td><td>${stats[i]}</td><td>${statsArch[i]}</td>`
            row.innerHTML = data
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            let k = i + 1
            table.children[0].children[k].remove()
            let row = table.insertRow(k)
            let data = `<td>${names[i]}</td><td>${stats[i]}</td><td>${statsArch[i]}</td>`
            row.innerHTML = data
        }
    }

}