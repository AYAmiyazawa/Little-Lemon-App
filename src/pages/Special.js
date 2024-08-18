function Special() {
    return (
        <div id="weekSpecial">
            <div className="flex">
                <h1>This weeks specials!</h1>
                <button>
                    <p>Online Menu</p>
                </button>
            </div>
            <div className="flex">
                <div className="card">
                    <img src="./images/greek salad.jpg" alt="greek salad" />
                    <div className="cardContainer">
                        <div className="cardTop flex">
                            <p className="category">Greek Salad</p>
                            <p className="price">$12.99</p>
                        </div>
                        <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <div className="cardBottom">
                            <p>Order a delivery</p>
                            <img src="./images/motorcycle.png" alt="bike" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/bruchetta.svg" alt="bruschetta" />
                    <div className="cardContainer">
                        <div className="cardTop flex">
                            <p className="category">Bruschetta</p>
                            <p className="price">$10.99</p>
                        </div>
                        <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className="cardBottom">
                            <p>Order a delivery</p>
                            <img src="./images/motorcycle.png" alt="bike" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/lemon dessert.jpg" alt="lemon dessert" />
                    <div className="cardContainer">
                        <div className="cardTop flex">
                            <p className="category">Lemon Dessert</p>
                            <p className="price">$8.99</p>
                        </div>
                        <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className="cardBottom">
                            <p>Order a delivery</p>
                            <img src="./images/motorcycle.png" alt="bike" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Special;