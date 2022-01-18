import { useState } from "react";
import { addTask } from "../../redux/actions";
import { v1 as uuid } from 'uuid';
const AddForm = () => {
    let [name, setName] = useState();
    let [type, setType] = useState();
    let [desc, setDesc] = useState();
    return (
        <div className="addForm">
            <label for="name">Name of point:</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name"></input>
            <label for="typeTask">Type of your point:</label>
            <select onChange={(e) => setType(e.target.value)} value={type} name="typeTask">
                <option value="task">Task</option>
                <option value="randomThought">Random Thought</option>
                <option value="idea">Idea</option>
            </select>
            <label for="desc">Description of point:</label>
            <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" id="desc"></input>
            <button
                onClick={() => {
                    addTask(
                        {
                            id: uuid(),
                            name: name,
                            created: "October 14 2021",
                            category: type,
                            content: desc,
                            dates: " "
                        }
                    )
                    setName('')
                    setType('')
                    setDesc('')
                }}
            >ADD TASK</button>
        </div>
    )
}
export default AddForm;