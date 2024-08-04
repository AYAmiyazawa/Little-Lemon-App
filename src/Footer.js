function Footer() {
    return(
        <footer>
            <div id="footerLogo">
                <img src="./images/footer-logo.png" width="auto" alt="Footer Logo"/>
            </div>
            <div className="flex">
                <div>
                    <p className="leadText">Doormat <br/>Navigation</p>
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
                <div id="contact">
                    <p className="leadText">Contact</p>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div id="socialMedia">
                    <p className="leadText">Social Media Links</p>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;