import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey.stops);
    console.log(journey.stops);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* <p>Nalezeno spojení s id {journey}</p> */}
      {journey === null ? null : <JourneyDetail journey={journey} />}
    </main>
  );
};
