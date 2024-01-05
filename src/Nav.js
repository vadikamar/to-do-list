import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navbar">
            <h1>Vadik Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>

            </div>
        </div>
    );
}
 
export default Nav;