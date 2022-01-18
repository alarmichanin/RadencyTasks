const Header = () => {
    return (
        <div className="Header">
            <div className="col">Name</div>
            <div className="col">Created</div>
            <div className="col">Category</div>
            <div className="col">Content</div>
            <div className="col">Dates</div>
            <div className="col"><i class="fas fa-inbox" id="archive"></i> <i class="far fa-trash-alt"></i></div>
        </div>
    );
}

export default Header;