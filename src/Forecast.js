import React from "react";

export default function Forecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thur</div>{" "}
          <img src={props.icon} width="60" alt={props.desc} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19°</span>
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
