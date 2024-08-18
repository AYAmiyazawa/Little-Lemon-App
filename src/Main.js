import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";

const updatedTimes = (selectedDate) => {
    const updatedTimes = [];
    if (selectedDate === "2024-09-12") {
        updatedTimes.push("6:00 PM", "7:00 PM", "9:00 PM");
    } else if (selectedDate === "2024-09-14"){
        updatedTimes.push("7:00PM", "10:00 PM");
    } else {
        updatedTimes.push("5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM")
    }
    return updatedTimes;
};

const initializeTimes = () => {
    const initialTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
    return initialTimes;
};

function Main() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                return updatedTimes(action.date);
            case "INITIALIZE_TIMES":
                return initializeTimes();
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

    useEffect (() => {
        dispatch({type: "INITIALIZE_TIMES"});
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;
export { updatedTimes }
export { initializeTimes }