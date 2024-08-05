import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div id="heroSection" className="flex">
                <div id="heroContent">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="cta">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>
                        <Link to="/reservations"><p>Reserve a Table</p></Link>
                    </button>
                </div>
                <div className="image">
                    <img src="./images/restauranfood.jpg" alt="image of restaurant food" />
                </div>
            </div>
        </header>
    );
}

export default Header