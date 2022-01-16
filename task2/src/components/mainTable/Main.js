import BtnComponent from "./BtnComponent";
import Note from "./Note"
const Main = () => {
    return (
        <div className="Main">
            {
                [...Array(10)].map(() =>
                    <Note />
                )
            }
            <BtnComponent />
        </div>
    );
}

export default Main;