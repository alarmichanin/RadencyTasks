import { useState } from "react";
import { addTask } from "../../redux/actions";
import { v1 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { category, isNotEmpty } from './typesConst';
import DatePic from "../DatePic";



const AddForm = ({ showForm }) => {
    let [name, setName] = useState();
    let [type, setType] = useState();
    let [desc, setDesc] = useState();
    let [dates, setDates] = useState();


    let dispatch = useDispatch();
    return (
        <div className="addForm">
            <label htmlFor="name">Name of point:</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name"></input>
            <label htmlFor="typeTask">Type of your point:</label>
            <select onChange={(e) => setType(e.target.value)} value={type} name="typeTask">
                <option selected disabled value="">Choose Tagging</option>
                <option value="taskType">Task</option>
                <option value="randomThought">Random Thought</option>
                <option value="idea">Idea</option>
            </select>
            <label htmlFor="desc">Description of point:</label>
            <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" id="desc"></input>
            <DatePic onChange={setDates} />
            <button
                onClick={() => {
                    if ((isNotEmpty(name) || isNotEmpty(desc)) && type) {
                        let date = new Date();
                        dispatch(addTask(
                            {
                                id: uuid(),
                                name: name,
                                created: date.toLocaleString('en-EN', { month: 'long' }) + " " + date.getDate() + " " + date.getFullYear(),
                                category: category[type],
                                content: desc,
                                dates: dates.join(", "),
                                isActive: true
                            }
                        ))
                        setName('')
                        setType('')
                        setDesc('')
                        showForm()
                    }
                }}
            >ADD TASK</button>
        </div>
    )
}
export default AddForm;