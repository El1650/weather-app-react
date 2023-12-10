import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    return Math.round(props.data.temperature.maximum);
  }

  function minTemp() {
    return Math.round(props.data.temperature.minimum);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        width="60"
        alt={props.data.condition.description}
      />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemp()}°</span>
        <span className="Forecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
