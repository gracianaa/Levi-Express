import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [number, setNumber] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey.stops);
    setNumber(journey.autoSeat);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* <p>Nalezeno spojení s id {journey}</p> */}
      {journey === null ? null : <JourneyDetail journey={journey} />}
      {journey === null ? null : <SelectedSeat number={number} />}
    </main>
  );
};
