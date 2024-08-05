import { useState } from "react";

function BookingForm({availableTimes, setAvailableTimes}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date });
        console.log({ time });
        console.log({ guest });
        console.log({ occasion });
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map(time =>(
                    <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                name="guests"
                value={guest}
                onChange={(e => setGuest(e.target.value))}
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation" />
        </form>
    )
};

export default BookingForm;