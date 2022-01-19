import CountTableHeader from "./CountTableHeader";
import CountTableNote from "./CountTableNote";
import { category as cat } from "../addForm/typesConst";
import { archived as arch } from "../../redux/reducer";

import { useSelector } from "react-redux";

const CountTable = () => {
    const todos = useSelector(state => state)

    const task = cat["taskType"]
    const idea = cat["idea"]
    const random = cat["randomThought"]

    const countActiveTask = type => todos.filter(todo => todo.category === type).length
    const countArchivedTask = type => arch.filter(archived => archived.category === type).length

    return (
        <div className="countTable">
            <CountTableHeader />
            <CountTableNote
                type={task}
                countActive={countActiveTask(task)}
                countArchived={countArchivedTask(task)}
            />
            <CountTableNote
                type={idea}
                countActive={countActiveTask(idea)}
                countArchived={countArchivedTask(idea)}
            />
            <CountTableNote
                type={random}
                countActive={countActiveTask(random)}
                countArchived={countArchivedTask(random)}
            />
        </div>

    )
}
export default CountTable;