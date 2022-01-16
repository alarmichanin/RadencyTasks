const AddForm = () => {
    return (
        <div>
            <label for="name">Name of point:</label>
            <input type="text" id="name"></input>
            <label for="typeTask">Type of your point:</label>
            <select name="typeTask">
                <option value="task">Task</option>
                <option value="randomThought">Random Thought</option>
                <option value="idea">Idea</option>
            </select>
            <label for="desc">Description of point:</label>
            <input type="text" id="desc"></input>
        </div>
    )
}
export default AddForm;