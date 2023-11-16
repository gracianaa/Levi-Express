import './style.css';
import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ numberSeat, seats }) => {
  return (
    <>
      <Seat number={numberSeat} />
      <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
          <SeatRow row={seats[0]} />
          <SeatRow row={seats[1]} />
          <SeatRow row={seats[2]} />
          <SeatRow row={seats[3]} />
          <SeatRow row={seats[4]} />
        </div>
      </div>
    </>
  );
};
