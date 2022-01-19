import AddForm from '../addForm/AddForm';
import { useState } from "react";

const BtnComponent = () => {
    const [showFrom, setShowFrom] = useState(false);
    const onClick = () => setShowFrom(!showFrom)

    return (
        <div>
            <button className="addBtn" onClick={onClick}>ADD NOTE</button>
            {showFrom && <AddForm showForm={showFrom} />}
        </div>
    )
}
export default BtnComponent;