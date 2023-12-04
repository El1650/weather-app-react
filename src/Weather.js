import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityName);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      time: new Date(response.data.time * 1000),
      city: response.data.city,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
    });
  }

  function search() {
    const apiKey = "b4d8b9ad60f6t00838ba39200o473c14";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              {/* <!-- Header Section --> */}
              <div className="form">
                <form className="input-city App" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="search"
                        className="form-control shadow-sm fm"
                        placeholder="Enter a city"
                        id="city"
                        autoFocus={true}
                        autoComplete="none"
                        onChange={handleCityChange}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary me-2 px-4 fm"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* <!-- Content area --> */}
              <div className="content">
                <h2>{weatherData.city}</h2>
                <p id="date-time">
                  <FormatDate date={weatherData.time} />
                </p>
                <p>
                  <span id="desc">{weatherData.description}</span>
                </p>
                <h1>
                  <img
                    src={weatherData.icon}
                    width="80"
                    alt={weatherData.description}
                    id="icon"
                  />
                  <span className="temps">
                    <WeatherTemperature celsius={weatherData.temperature} />
                  </span>
                </h1>
                <div className="content right">
                  <p>
                    Wind: <span id="wind">{weatherData.wind}</span>KMPH
                  </p>
                  <p>
                    Humidity: <span id="hum">{weatherData.humidity}</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            This project is coded by{" "}
            <a href="https://github.com/El1650" target="_blank">
              Elena G.Mandefro
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
  }
}
