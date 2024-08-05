import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes, setAvailableTimes}) {
    /*
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    */
    return(
        <div className="wrapper">
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </div>
    )
};

export default BookingPage;