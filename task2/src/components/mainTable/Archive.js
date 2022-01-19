import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Header from './Header';
import Note from './Note';

const Archive = ({ triggerElem, todos }) => {

    return (
        <Popup trigger={triggerElem} modal>
            <Header showArchive={true} />
            <div className="Main">
                {
                    todos.map(todo => {
                        return <Note key={todo.id} todo={todo} />
                    })
                }
            </div>
        </Popup>
    );
}
export default Archive;