import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch}) {
    return(
        <div className="wrapper">
            <h1>Reservations</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    )
};

export default BookingPage;