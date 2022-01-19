import AddForm from '../addForm/AddForm';
import { useState } from "react";

const BtnComponent = () => {
    const [showForm, setShowFrom] = useState(false);
    const onClick = () => setShowFrom(!showForm)

    return (
        <div>
            <button className="addBtn" onClick={onClick}>ADD NOTE</button>
            {showForm && <AddForm showForm={onClick} style={{ display: showForm ? 'flex' : 'none' }} />}
        </div>
    )
}
export default BtnComponent;