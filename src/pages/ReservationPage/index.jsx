import { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

export const ReservationPage = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchDataId = async () => {
      const responseId = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${reservationId}`,
      );
      const dataId = await responseId.json();
      setReservation(dataId.results);
      console.log(dataId.results);
    };

    fetchDataId();
  }, [reservationId]);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservationId}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty: </p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        {/* Nezapomeňte zobrazení dat podmínit tím, že stav reservation nemá hodnotu null, jinak bude prohlížeč hlásit chybu, že nelze číst z undefined. */
        /*Na začiatku máme v stave "reservation" definované defaultne hodnotu "null", potom fetchujeme data, ale tým, že občas trvá, kým sa data stiahnú z API, nám už rovno vracia hodnotu null, preto to musíme ošetriť podmienkou, že ak je hodnota null, tak sa nám to čo je v return() nezobrazí, a ak hodnota nie je null, čiže data sa nám už z API načítali, tak sa zobrazí čo chceme, v tomto prípade, hodnota reservation bez podmienky, by dosadzovala hodnotu null a tým pádom, by vracalo hodnotu null.date, null.fromCity.name a hlásilo by nám undefined v konzole:
          Cannot read properties of null (reading 'date') */
        /*Podmienku definujeme ako {reservation && (...)} */}
        {reservation && (
          <div className="reservation__info">
            <p>{reservation.date}</p>
            <p>
              {reservation.fromCity.name} {reservation.fromCity.time}
            </p>
            <p>
              {reservation.toCity.name} {reservation.toCity.time}
            </p>
            <p>{reservation.seatNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};
