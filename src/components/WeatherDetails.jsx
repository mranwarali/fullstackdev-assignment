import React from 'react'

const WeatherDetails = ({ weatherData, unit }) => {
  return (
    <div className="weather-card">
      <h2>Current Weather</h2>
      <p>
        <span>Temperature: </span>
        {unit === 'C' ? `${temp}°C` : `${temp}°F`}
      </p>
      <p>
        <span>Minimum Temperature: </span>
        {unit === 'C' ? `${main.temp_min}°C` : `${main.temp_min}°F`}
      </p>
      <p>
        <span>Maximum Temperature: </span>
        {unit === 'C' ? `${main.temp_max}°C` : `${main.temp_max}°F`}
      </p>
      <p>
        <span>Humidity: </span>
        {humidity}%
      </p>
      <p>
        <span>Wind Speed: </span>
        {speed} m/s
      </p>
      <p>
        <span>Wind Direction: </span>
        {deg}°
      </p>
      <p>
        <span>Description: </span>
        {description}
      </p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
    </div>
  )
}

export default WeatherDetails



