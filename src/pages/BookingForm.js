import { useState } from "react";

function BookingForm({availableTimes, dispatch}) {
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({});
        console.log({time});
        console.log({guest});
        console.log({occasion});
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        dispatch({type: "UPDATE_TIMES", date: selectedDate});
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            {/* for date */}
            <label htmlFor="date">Choose a date</label>
            <input type="date" id="date" onChange={handleDateChange} />
            {/* for time */}
            <label htmlFor="time">Choose time</label>
            <select id="time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes && availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            {/* for guest */}
            <label htmlFor="guests">Guests</label>
            <input
                type="number"
                placeholder="number of guest"
                min="1" max="10"
                id="guests"
                name="guests"
                value={guest}
                onChange={(e => setGuest(e.target.value))}
                required
            />
            {/* for occasion */}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>
            {/* submit button */}
            <input type="submit" value="Make Your Reservation" />
        </form>
    )
};

export default BookingForm;