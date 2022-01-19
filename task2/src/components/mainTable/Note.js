import { useState } from "react";
import { useDispatch } from "react-redux";
import { archieveTask, removeTask, updateTask } from "../../redux/actions";
import { category } from '../addForm/typesConst';
import DatePic from '../DatePic'


const Note = ({ todo }) => {
    const [editable, setEditable] = useState(true);
    const [name, setName] = useState(todo.name);
    let [type, setType] = useState("");
    let [desc, setDesc] = useState(todo.content);
    let [dates, setDates] = useState([]);

    let dispatch = useDispatch();
    return (
        <div>
            {editable
                ?
                <div className="note">
                    <div className="noteCol">{todo.name}</div>
                    <div className="noteCol">{todo.created}</div>
                    <div className="noteCol">{todo.category}</div>
                    <div className="noteCol">{todo.content}</div>
                    <div className="noteCol">{todo.dates}</div>
                    <div className="noteColIcon">
                        <i className="fas fa-inbox" id="archive"
                            onClick={() => {
                                todo.isActive = false
                                dispatch(archieveTask(todo.isActive))
                            }}>
                        </i>
                        <i className="far fa-trash-alt" id="delete"
                            onClick={() => dispatch(removeTask(todo.id))}>
                        </i>
                        <i className="far fa-edit" id="edit"
                            onClick={() => setEditable(!editable)}>
                        </i>
                    </div>
                </div>
                :
                <div className="noteEdit">
                    <div className="noteCol"><input type={"text"}
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                    /></div>
                    <div className="noteCol">{todo.created}</div>
                    <div className="noteCol">
                        <select onChange={(e) => setType(e.target.value)} value={type} name="typeTask">
                            <option selected disabled value="">Choose Tagging</option>
                            <option value="taskType">Task</option>
                            <option value="randomThought">Random Thought</option>
                            <option value="idea">Idea</option>
                        </select>
                    </div>
                    <div className="noteCol"><input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" id="desc"></input></div>
                    <div className="noteCol">
                        <DatePic onChange={setDates} />
                    </div>
                    <div className="noteColIcon">
                        <i className="fas fa-inbox" id="archive"
                            onClick={() => {
                                todo.isActive = false
                                dispatch(archieveTask(todo.isActive))
                            }}>
                        </i>
                        <i className="far fa-trash-alt" id="delete"
                            onClick={() => dispatch(removeTask(todo.id))}>
                        </i>
                        <i className="fas fa-check-circle" id="edit"
                            onClick={() => {
                                dispatch(updateTask(
                                    {
                                        ...todo,
                                        name: name,
                                        category: category[type],
                                        content: desc,
                                        dates: dates.join(", ")
                                    }
                                ))
                                if (!editable) {
                                    setName(todo.name)
                                }
                                setEditable(!editable)
                            }}>
                        </i>
                    </div>
                </div>
            }
        </div >

    )

}
export default Note;