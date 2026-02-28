import { useState } from "react";
import { initialSeats } from "./seatData";
import "./SeatBooking.css";

const SeatBooking = () => {
  const [seatBooking, setSeatBooking] = useState(initialSeats ?? []);

  const handleSeatBooking = (id) => {
    setSeatBooking((prevSeat = []) =>
      prevSeat.map((seat) => {
        if (seat?.id === id) {
          if (seat?.booked) {
            console.log("Seat is already booked");
            return seat;
          }
          return { ...seat, selected: !seat?.selected };
        }
        return seat;
      }),
    );
  };

  const selectedSeats = seatBooking?.filter((seat) => seat?.selected) ?? [];

  const totalPrice = (selectedSeats?.length ?? 0) * 150;

  return (
    <>
      <div className="seat-container">
        {seatBooking?.map((seat) => (
          <div key={seat?.id ?? Math.random()} className="seat-card">
            <span className="seat-id">{seat?.id ?? "N/A"}</span>

            <button
              className={`seat-btn 
                ${
                  seat?.booked
                    ? "booked"
                    : seat?.selected
                      ? "selected"
                      : "available"
                }`}
              onClick={() => handleSeatBooking(seat?.id)}
              disabled={seat?.booked ?? false}
            >
              {seat?.booked ? "Booked" : seat?.selected ? "Selected" : "Book"}
            </button>
          </div>
        ))}
      </div>

      <div className="summary">
        <p>
          Selected Seats:{" "}
          {selectedSeats?.map((s) => s?.id).join(", ") ?? "None"}
        </p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </>
  );
};

export default SeatBooking;
