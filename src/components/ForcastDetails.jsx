import React from 'react'

const ForcastDetails = ({ weatherData, unit }) => {
    const { list } = weatherData;
    const forecast = list.slice(0, 5);
  return (
    <div className="forecast-card">
      <h2>5-Day Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>
            <span>Date: </span>
            {new Date(day.dt * 1000).toLocaleDateString()}
          </p>
          <p>
            <span>Average Temperature: </span>
            {unit === 'C' ? `${day.main.temp}°C` : `${day.main.temp}°F`}
          </p>
          <p>
            <span>Description: </span>
            {day.weather[0].description}
          </p>
          <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
        </div>
      ))}
    </div>
  )
}

export default ForcastDetails

