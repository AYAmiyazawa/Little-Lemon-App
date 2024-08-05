import { useState } from "react";
import {Link} from "react-router-dom";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return(
        <nav className="navbar">
            <div id="logo">
                <Link to="/"><img src="./images/header-logo.png" alt="Logo" /></Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-list flex ${menuOpen ? "visible": ""}`} onClick={toggleMenu}>
                <li><Link to="/" className="nav-item">HOME</Link></li>
                <li><Link to="/about" className="nav-item">ABOUT</Link></li>
                <li><Link to="/menu" className="nav-item">MENU</Link></li>
                <li><Link to="/reservations" className="nav-item">RESERVATIONS</Link></li>
                <li><Link to="/order" className="nav-item">ORDER ONLINE</Link></li>
                <li><Link to="/login" className="nav-item">LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;