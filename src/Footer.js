function Footer() {
    return(
        <footer>
            <div className="footerLogo">
                <img src="./images/footer-logo.png" width="auto" alt="Footer Logo"/>
            </div>
            <div className="footerNav">
                <div className="footerTop"><p>Doormat <br/>Navigation</p></div>
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
            <div className="contact">
                <div className="footerTop"><p>Contact</p></div>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="socialMedia">
                <div className="footerTop"><p>Social Media Links</p></div>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;