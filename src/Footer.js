function Footer() {
    return(
        <footer>
            <img src="images/Mario and Adrian A.jpg" width="200" alt="Footer Logo"/>
            <div>
                <p>Doormat Navigation</p>
                <nav>
                    <ul>
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/menu">MENU</a></li>
                        <li><a href="/reservations">RESERVATIONS</a></li>
                        <li><a href="/order">ORDER ONLINE</a></li>
                        <li><a href="/login">LOGIN</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <p>Social Media Links</p>
                <ul>
                    <li><a>Instagram</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>YouTube</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;