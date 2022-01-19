const CountTableNote = ({ type, countActive, countArchived }) => {
    return (
        <div className="countTableNote">
            <div className="countTableNoteCol">{type}</div>
            <div className="countTableNoteCol">{countActive}</div>
            <div className="countTableNoteCol">{countArchived}</div>
        </div>
    )
}
export default CountTableNote;