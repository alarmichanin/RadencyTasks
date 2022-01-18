import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions";

const Note = ({ todo }) => {
    let dispatch = useDispatch();
    return (
        <div className="note">
            <div className="noteCol">{todo.name}</div>
            <div className="noteCol">{todo.created}</div>
            <div className="noteCol">{todo.category}</div>
            <div className="noteCol">{todo.content}</div>
            <div className="noteCol">{todo.dates}</div>
            <div className="noteCol"><i className="fas fa-inbox" id="archive" onClick={() => console.log("arch")}></i> <i className="far fa-trash-alt" id="delete" onClick={() => dispatch(removeTask(todo.id))}></i><i className="far fa-edit" id="edit"></i></div>
        </div>
    )

}
export default Note;