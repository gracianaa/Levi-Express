import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey.journeyId);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <p>Nalezeno spojení s id {journey}</p>
    </main>
  );
};
