import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/actions";
import Archive from "./Archive";
import { archived } from "../../redux/reducer";

const Header = ({ showArchive }) => {
    let dispatch = useDispatch();

    let archive = <i class="fas fa-inbox" id="archive" ></i>

    return (
        <div className="Header">
            <div className="col">Name</div>
            <div className="col">Created</div>
            <div className="col">Category</div>
            <div className="col">Content</div>
            <div className="col">Dates</div>
            <div className="col">
                <div>
                    <Archive triggerElem={archive} todos={archived} />
                    <i class="far fa-trash-alt" onClick={() => { dispatch(removeAll()) }}></i>
                </div>


            </div>
        </div>
    );
}

export default Header;