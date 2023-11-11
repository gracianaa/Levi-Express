import React, { useEffect, useState } from 'react';
import './style.css';
import { CityOptions } from './CityOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      setCities(data.results);
    };

    fetchData();
  }, []);

  const handleChangeFromCity = (e) => {
    setFromCity(e.target.value);
  };
  const handleChangeToCity = (e) => {
    setToCity(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={handleChangeFromCity}>
              <option value="">Vyberte</option>
              {cities.map((c) => (
                <CityOptions key={c.code} cities={c.name} />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={handleChangeToCity}>
              <option value="">Vyberte</option>
              {cities.map((c) => (
                <CityOptions key={c.code} cities={c.name} />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={handleChangeDate}>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
