import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import ForcastDetails from './ForcastDetails';
import ChangeUnit from './ChangeUnit';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('C');

    useEffect(() => {
        if (city) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=bb4d7e479236a68d57a70c6eb55e16e0`)
                .then(response => {
                    setWeatherData(response.data);
                })
                .catch(error => {
                    console.error(error);
                    setWeatherData(null);
                });
        }
    }, [city, unit]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleUnitChange = (unit) => {
        setUnit(unit);
    };

    return (
        <div className="app">
            <h1>Weather Forecast</h1>
            <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" />
            <ChangeUnit unit={unit} onUnitChange={handleUnitChange} />
            {weatherData ? (
                <div>
                    <WeatherDetails weatherData={weatherData} unit={unit} />
                    <ForcastDetails weatherData={weatherData} unit={unit} />
                </div>
            ) : (
                <p>No weather data found for {city}</p>
            )}
        </div>
    )
}

export default Weather
