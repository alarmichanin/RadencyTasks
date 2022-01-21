export const stats = notes => {
    let statisticObj = {
        "active": {
            "Task": 0,
            "Idea": 0,
            "Random Thought": 0
        },
        "passive": {
            "Task": 0,
            "Idea": 0,
            "Random Thought": 0
        }
    }
    let state, category;
    notes.map(note => {
        state = note.Active ? "active" : "passive";
        category = note.Category;
        statisticObj[state][category]++
    })
    return statisticObj;
}