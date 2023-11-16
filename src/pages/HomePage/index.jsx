import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../../components/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [number, setNumber] = useState(null);
  const [journeyId, setJourneyId] = useState(null);
  const [seats, setSeats] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey.stops);
    setNumber(journey.autoSeat);
    setJourneyId(journey.journeyId);
    setSeats(journey.seats);
    console.log(journey.seats);
  };

  const handleBuy = async (e) => {
    e.preventDefault();
    const reservation = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: number,
          journeyId: journeyId,
        }),
      },
    );

    const dataReservation = await reservation.json();
    // console.log(dataReservation.results.reservationId);
    const reservationId = dataReservation.results.reservationId;

    navigate(`/reservation/${reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SeatPicker seats={seats} numberSeat={number} />}
      <div className="controls container">
        <button
          onClick={handleBuy}
          hidden={journey === null}
          className="btn btn--big"
          type="button"
        >
          Rezervovat
        </button>
      </div>
    </main>
  );
};
