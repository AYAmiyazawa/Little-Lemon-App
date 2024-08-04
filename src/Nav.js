import {Link} from "react-router-dom";

function Nav() {
    return(
         <nav id="nav">
            <ul className="flex">
                <Link to="/" className="nav-item">HOME</Link>
                <Link to="/about" className="nav-item">ABOUT</Link>
                <Link to="/menu" className="nav-item">MENU</Link>
                <Link to="/reservations" className="nav-item">RESERVATIONS</Link>
                <Link to="/order" className="nav-item">ORDER ONLINE</Link>
                <Link to="/login" className="nav-item">LOGIN</Link>
            </ul>
        </nav>
    );
}

export default Nav;