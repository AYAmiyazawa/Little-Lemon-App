import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";


function Main() {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;