import { useSelector } from "react-redux";
import BtnComponent from "./BtnComponent";
import Note from "./Note"

const Main = () => {
    const todos = useSelector(state => state)
    return (
        <div className="Main">
            {
                todos.map(todo => {
                    return <Note key={todo.id} todo={todo} />
                })
            }
            <BtnComponent />
        </div>
    );
}

export default Main;