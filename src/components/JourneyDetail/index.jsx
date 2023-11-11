import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.map((j) => (
          <BusStop
            key={j.code}
            name={j.name}
            station={j.station}
            time={j.time}
          />
        ))}
      </div>
    </div>
  );
};
